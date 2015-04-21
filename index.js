/**
 * Copyright 2015 Urban Airship and Contributors
 */
var parser = require('tap-parser')

var p = parser(function(results) {
  process.exit(Number(!results.ok))
})

p.on('assert', function(assert) {
  if(!assert.ok) {
    process.exit(1)
  }
})

process.stdin.pipe(process.stdout)
process.stdin.pipe(p)
