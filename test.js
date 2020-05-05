const test = require('tape')
const { mkdtempSync, mkdirSync } = require('fs')
const generate = require('.')

test('Project generation', t => {
  mkdirSync('./tmp', { recursive: true })
  const testDir = mkdtempSync('./tmp/pure_test')
  generate(testDir, 'testModule', 'Module Description')
  t.end()
})
