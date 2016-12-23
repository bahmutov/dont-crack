# dont-crack

> semantic-release plugin checking if the new semantic release is breaking dependent projects

[![NPM][npm-icon] ][npm-url]

[![Build status][ci-image] ][ci-url]
[![semantic-release][semantic-image] ][semantic-url]
[![js-standard-style][standard-image]][standard-url]

This is [semantic-release](https://github.com/semantic-release/semantic-release)
plugin for the
[verifyRelease](https://github.com/semantic-release/semantic-release#verifyrelease)
step.

It ensures that a minor or a patch update to your module does NOT break
modules that depend on it. A major version upgrade is allowed to break the
dependent projects.

## Configuration

Install NPM plugin `npm i -D dont-crack` (assuming you have
`semantic-release` already installed).

Add "release" configuration block and list all the projects (as github repos
for now) which depend on your module and that you don't want to break
accidentally. For example, if you want to test new release before publishing
it against modules "foo" and "bar"

```json
{
  "release": {
    "verifyRelease": {
      "path": "dont-crack",
      "test-against": [
        "https://github.com/bahmutov/foo",
        "https://github.com/bahmutov/bar"
      ]
    }
  }
}
```

That's it. If there is new "minor" or "patch" semantic version determined
from the commit log, it will be tested against these two repos.

## Debug

If something goes wrong, you can see the messages from this plugin by running
with `DEBUG=dont-crack ...` environment variable.

### Small print

Author: Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt; &copy; 2016

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog)

License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/dont-crack/issues) on Github

## MIT License

Copyright (c) 2016 Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt;

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[npm-icon]: https://nodei.co/npm/dont-crack.svg?downloads=true
[npm-url]: https://npmjs.org/package/dont-crack
[ci-image]: https://travis-ci.org/bahmutov/dont-crack.svg?branch=master
[ci-url]: https://travis-ci.org/bahmutov/dont-crack
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-url]: http://standardjs.com/
