[`pure | 📦`](https://github.com/telamon/create-pure)
[`code style | standard`](https://standardjs.com/)
# Pure JavaScript Module

> Minimalistic template to generate low maintenence JS modules

An opinionated template to optimize workflow for stressed out minimalists.

The template is intended for modules whose main purpose is to _export_
functionality and are published to a public registry.

(Don't use this for your main project, you'll most likely regret it)

Read the full [Motivation](https://github.com/telamon/create-pure#motivation) for more info.

**Features**

- Zero Configuration
- Minimal maintenence
- Platform independent
- Strict reverse ignore policy
- [Standard JS](https://standardjs.com/)
- Embedded [changelog](https://keepachangelog.com/en/1.0.0/)
- WYSIWYG generator

## <a name="Use"></a> Use

### `npm init pure my-awesome-module`

That's it.

```
$ tree my-awesome-module
my-awesome-module/
├── .editorconfig
├── .gitignore
├── LICENSE
├── README.md
├── index.js
├── package.json
└── test.js
```

## Options

Zero conf? I lied, there is some "configuration".

**REPO_PREFIX**

```bash
git config --global user.platform "https://github.com/telamon"
```

**AUTHOR**

```bash
git config --global user.name "First Last"
git config --global user.email "username@provider.tld"
```

**DONATION_TEXT**

```bash
git config --global user.donation ~/Documents/advertisment.md
```

#### DIY

If the options above do not satisfy your cutomization needs
then **fork off**!

No seriously fork this repo, edit the **Templates** section of this `README.md`
and use it with:

```bash
$ npm init username/pure my-awesome-module
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
!.editorconfig
!.gitignore
```

I use `git clean -fdxn` to eyeball if I need to tweak
the `.gitignore` in a project, if you use this method
make sure _to not omit_ the `n` flag..

### `index.js`

```js
// SPDX-License-Identifier: LICENSE_SPDX
```

### `test.js`

```js
const test = require('tape')

test('desc', t => {
  t.end()
})
```

### `.editorconfig`

```
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

### `README.md`

```markdown
[`pure | 📦`](https://github.com/telamon/create-pure)
[`code style | standard`](https://standardjs.com/)
# MODULE_NAME

> MODULE_DESC

## Use

BBQbash
$ npm install MODULE_NAME
BBQ

BBQjs
const mod = require('MODULE_NAME')
mod.doMagic() // => Result
BBQ

## Donations

DONATION_TEXT

## Changelog

### 0.1.0 first release

## Contributing

By making a pull request, you agree to release your modifications under
the license stated in the next section.

Only changesets by human contributors will be accepted.

## License

[LICENSE_SPDX](./LICENSE)

YEAR &#x1f12f; AUTHOR
```

### `LICENSE`

TODO: Multiple choice prompt

- Open "this version" (MIT)
- Open "all future versions" (AGPL)

Only AGPL available right now cause that's the one I use.
Open an issue if you need something else. :thumbsup:

```
LICENSE_TEXT
```

### `package.json`

TODO:

- [ ] make `test` and `debug` optional via git.config
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
    "url": "git://REPO_PREFIX/MODULE_NAME"
  },
  "author": "AUTHOR",
  "license": "LICENSE_SPDX",
  "bugs": {
    "url": "REPO_PREFIX/MODULE_NAME"
  },
  "homepage": "REPO_PREFIX/MODULE_NAME"
}
```

## Motivation

### TL;DR;

I am exploring the effects of

```bash
echo '*' > .gitignore
```

### The problem; Time

Imagine that instead of publishing a piece of functionality, you're building a time-capsule.
There's no way to tell when or who will stumble upon it's contents nor
to what ends it will be used.

Ask yourself, if your current commit were to be visited 10 years from now
how much of the looks and function will have survived the rot and decay of time?

Also new repositories are created every second, there is a real risk that
your repo might not be visited for another couple of years or even
during your lifespan.

The fear of low popularity drives some us to extensivly decorate
our repositories with integrations, badges, remotely linked images.

It's a special kind of madness called "Marketing".
It costs effort, dosen't really help indexing and in the end only produces more noise for the visitor.

I want to try a different strategy -
I believe that the code is the most significant component of any repository
and the only piece that should be worth the effort.

### Proposed solution; Rules

> §1 A Git repository is an interdimensional holy ground, period.

It is a shared resource between you and countless other individuals present and future - each with their own configurations, workflows, tooling, integrations and platforms.

The more you add the more you commit to maintain

> §2 The code that is exported must be the same that is written

Transpilation in modules sucks so much it deserves at least 3 separate articles of it's own.
Please stop publishing modules written with X but exporting Y.
It messes up introspection, consistency and all in all just makes your module more time sensitive.

> §3 Avoid redundant links to external resources

If a dependency is not central to your modules function then leave it out.

Consider exporting a lower level interface with zero dependencies
rather than a high-level-does-it-all with the help of external deps.

Adding dependencies is the easy part, getting rid of them is a great
incentive to fork.

### Rewarding Pragmatism

To be human is to err and find compromise.
If you're using this template or make an honest attempt
to follow the proposed guidelines then you deserve the badge of purity!

_Behold the anti-badge-badge!_

[`pure | 📦`](https://github.com/telamon/create-pure)

With this we can proudly show that once again hypocrisy
and ideals go hand in hand.

On a sidenote: I've "purified" that badge, it comes at the cost of reduced
visual quality but with improved anonymity and I am confident that the looks wont degrade much in the years to come.

P.S. On the subject of emoji I am stumped. Hieroglyphs have previously
shown great resillience and these ones are even standardized. Decide for yourself

Plain ASCII badge:

[`pure | module`](https://github.com/telamon/create-pure)

## Changelog
### `1.1.1`
- Renamed git-config variables
### `1.1.0`
- Added Unicode-badges - the breadcrumbs of ideals..
- Removed (yarn/npm install) command
- Added &#x1f12f;-symbol if you can see it, then this text has traveled through time.

## Contributing

By making a pull request, you agree to release your modifications under the license stated in the next section.

Only changesets by human contributors will be accepted.

## License

[`AGPL-3.0-or-later`](./LICENSE)

Tony Ivanov &#x1f12f; 2020
