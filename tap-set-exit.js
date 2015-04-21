#!/usr/bin/env node

var parser = require('tap-parser')

var p = parser(done)

process.stdin.pipe(process.stdout)
process.stdin.pipe(p)

function done(result) {
  if(!result.ok) {
    process.exit(1)
  }
}
