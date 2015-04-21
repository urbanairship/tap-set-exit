# tap-set-exit

Sets the correct exit code based on tap output.

## Usage

Exposes a CLI tool `tap-set-exit`, which can be used as follows:

```bash
$ cat some-test-output.txt | tap-set-exit
```

Where this is most useful is running tests in an environment like [jsdom][] or
[phantomjs][] where the correct exit code would not be set.

For an always failing test:

```javascript
// file: fail.js
var test = require('tape')

test('always fails', function(t) {
  t.fail()
  t.end()
})
```

Run in a [jsdom][] context after being [browserified][browserify]:

```bash
$ browserify fail.js | jsdom-eval | tap-set-exit

TAP version 13
# always fails 
not ok 1 (unnamed assert)

1..1
# tests 1
# pass  0
# fail  1

# ok

$ echo $?
1
```

Output from the tap-producing command is passed through unmodified; only the
exit code is set.

## License

This project is licensed under the Apache License, Version 2.0. See
[LICENSE][license] for the full license.

[license]: ./LICENSE
[jsdom]: https://github.com/tmpvar/jsdom
[phantomjs]: http://phantomjs.org/
[browserify]: http://browserify.org/
