const test = require('tape')
const { mkdtempSync, mkdirSync } = require('fs')
const { execSync } = require('child_process')
const generate = require('.')

test('Project generation', t => {
  mkdirSync('./tmp', { recursive: true })
  const testDir = mkdtempSync('./tmp/pure_test')
  generate(testDir, 'testModule', 'Module Description')
  const e = execSync('../../node_modules/.bin/standard', { cwd: testDir })
  t.equals(e.length, 0)
  t.end()
})
