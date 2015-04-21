var spawn = require('child_process').spawn
var fs = require('fs')
var path = require('path')

var test = require('tape')

test('sets correct status on passing tests', function(t) {
  t.plan(1)

  var file = fs.createReadStream(path.join(__dirname, 'fixtures', 'pass.txt'))
  var instance = spawn('./tap-set-exit.js')

  instance.on('close', function(code) {
    t.equal(code, 0)
  })

  file.pipe(instance.stdin)
})

test('sets correct status on failing tests', function(t) {
  t.plan(1)

  var file = fs.createReadStream(path.join(__dirname, 'fixtures', 'fail.txt'))
  var instance = spawn('./tap-set-exit.js')

  instance.on('close', function(code) {
    t.equal(code, 1)
  })

  file.pipe(instance.stdin)
})
