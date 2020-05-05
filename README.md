# Pure JavaScript Module

> Template to generate low maintenence JS modules

An opinionated template to optimize workflow for stressed out minimalists.

The template is intended for modules whose main purpose is to _export_
functionality and published to a public registry.

(Don't use this for your main project, you'll most likely regret it)

## Features

- Zero Configuration
- Minimal maintenence
- Strict reverse ignore policy
- [Standard JS](https://standardjs.com/)
- Embedded [changelog](https://keepachangelog.com/en/1.0.0/)
- WYSIWYG generator

## <a name="Use"></a> Use

```
$ npm init @pure/module <moduleName>
$ cd <moduleName>
$ npm install
```

## Templates

This section contains the contents for all files that this template generates.
The generation code is located in [index.js](./index.js)

### `.gitignore`

This is an exhaustive list of permitted files, if you feel that
something is missing then don't hesitate to ask.

```
# Reverse policy .gitignore
*
!README.md
!LICENSE
!package.json
!index.js
!test.js
```

### `README.md`

```markdown
# MODULE_NAME

> MODULE_DESC

## Use

## Changelog

## Contributing

By making a pull request, you agree to release your modifications under the license stated in the next section.

Only changesets by human contributors will be accepted.

## License

LICENSE_SPDX AUTHOR YEAR
```

### `LICENSE`

TODO: Multiple choice prompt

- Open "this version" (MIT)
- Open "all future versions" (AGPL)

Only AGPL available right now cause that's the one I use, open an issue
if you need something else, I don't mind patching it in. :thumbsup:

```
LICENSE_TEXT
```

### `package.json`

TODO:

- [ ] make `test` and `debug` optional via git.config
- [ ] Repo-url via `git config --global pure.platform`
- [ ] type: "module"

```json
{
  "name": "MODULE_NAME",
  "version": "0.1.0",
  "description": "MODULE_DESC",
  "main": "index.js",
  "scripts": {
    "lint": "standard",
    "test": "tape test.js",
    "debug": "node inspect $(npm bin)/tape test.js",
    "prepublishOnly": "standard && npm test"
  },
  "repository": {
    "type": "git",
    "url": "git://github.com/telamon/pure-random-number"
  },
  "author": "AUTHOR",
  "license": "LICENSE_SPDX"
}
```

### `index.js`

TODO: should be `index.mjs` for type modules.

```js
// SPDX-License-Identifier: LICENSE_SPDX
```

### `test.js`

TODO: test-suite should be optional/ compatible with mjs

```js
const test = require('tape')

test('desc', t => {
  t.end()
})
```

## Motivation

A Git repository is an inter dimensional holy ground, period.

It is a shared resource between you and countless other individuals present and future - each with their own configurations, workflows, tooling, integrations and platforms.

It is pointless to assume which decorations will be popular tomorrow
or guess which services will still exist in 10 years - the more you add the more you commit to maintain; like a loop without a break.

I believe that the code is the most significant component of any repository
and the only component worth my time. I also strongly suggest
that it should be written in the same form that it is exported to stop messing up
introspection for other people.

If you find yourself wanting for more, then maybe it's time for you to split
your code into a separate module _- or simply purity might not be for you._

## Donations


## Contributing

By making a pull request, you agree to release your modifications under the license stated in the next section.

Only changesets by human contributors will be accepted.

## License

`AGPL-3.0-or-later` Tony Ivanov 2020
