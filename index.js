#!/usr/bin/env node
// SPDX-License-Identifier: AGPL-3.0-or-later
const { mkdirSync, readdirSync, readFileSync, writeFileSync } = require('fs')
const { join } = require('path')
const { execSync } = require('child_process')
const { createInterface } = require('readline')

const log = console.log.bind('pure/module')
function mkdir (dir) {
  try {
    mkdirSync(dir, { recursive: true, mode: 0o755 })
  } catch (err) {
    if (err.code !== 'EEXIST') {
      throw err
    }
  }
}

function dirIsEmpty (directory) {
  try {
    const files = readdirSync(directory)
    return !files.length
  } catch (err) {
    if (err.code !== 'ENOENT') {
      throw err
    }
  }
  return true
}

function readGit (prop) {
  const v = execSync(`git config --global ${prop}`)
  return v.slice(0, v.length - 1).toString('utf8')
}

function generate (dst, moduleName, desc, readme) {
  if (!dirIsEmpty(dst)) throw new Error('Destination path not empty, refusing to overwrite')
  if (!moduleName) throw new Error('Please specify a module name')

  log(`Generating module ${dst}...`)
  mkdir(dst)
  readme = (readme || readFileSync(join(__dirname, 'README.md'))).toString('utf8')
  const license = readFileSync(join(__dirname, 'LICENSE')).toString('utf8')
  const donationFile = readGit('user.donation')
  let donation = '```git config --global npm.donation absolute/path/to/textfile```'
  try {
    if (donationFile) donation = readFileSync(donationFile)
  } catch (err) { console.error('Failed to read donationFile:', donationFile, err) }

  const substitues = {
    MODULE_NAME: moduleName,
    MODULE_DESC: desc || 'Tagline goes here',
    LICENSE_SPDX: 'AGPL-3.0-or-later',
    LICENSE_TEXT: license,
    AUTHOR: `${readGit('user.name')} <${readGit('user.email')}>`, // get this from git
    DONATION_TEXT: donation,
    REPO_PREFIX: readGit('user.platform'),
    YEAR: new Date().getFullYear(),
    BBQ: '```'
  }

  let blockBuffer = []
  let sectionTemplates = false
  let insideBlock = false
  let outFile = null
  for (const line of readme.split('\n')) {
    if (line.match(/^## Templates/i)) {
      sectionTemplates = true
      continue
    }
    if (!sectionTemplates) continue

    if (!insideBlock) {
      if (line.match(/^## /)) break // Exit loop
      let m = null
      if ((m = line.match(/^###\s*`(.+)`/))) outFile = m[1]
      if (line.match(/^```\S*$/)) insideBlock = true
    } else if (line.match(/^```$/)) {
      const tgt = join(dst, outFile)
      let text = blockBuffer.join('\n')
      for (const k in substitues) {
        text = text.replace(new RegExp(k, 'g'), substitues[k])
      }
      log('Generating', tgt)
      writeFileSync(tgt, text)
      // log('Wrote', tgt, '\n', text)
      blockBuffer = []
      insideBlock = false
      outFile = null
    } else blockBuffer.push(line)
  }
  // const deps = 'standard tape'
  // const initCmd = `cd ${dst} && (yarn add -D ${deps} || npm i --save-dev ${deps})`
  // log('Running command:\n', initCmd)
  // execSync(initCmd).toString('utf8')
  log('done!\n')
}
module.exports = generate
module.exports.readGitConfig = readGit

try {
  if (process.mainModule.filename === __filename) {
    const dst = join(process.cwd(), process.argv[2] || '.')
    const moduleName = process.argv[2]
    const rl = createInterface({ input: process.stdin, output: process.stdout })
    rl.question('Description: ', desc => {
      generate(dst, moduleName, desc)
      process.exit(0)
    })
  }
} catch (err) {
  log(err)
  process.exit(1)
}
