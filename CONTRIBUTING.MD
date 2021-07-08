# Contribution Guidelines

## Table of Contents

- [Contribution Strategy](#contribution-strategy)
- [Development Environment](#development-environment)
  - [Node.js](#node.js)
  - [EditorConfig](#editorconfig)
  - [ESLint](#eslint)
- [Commit Message Guidelines](#commit-message-guidelines)
  - [Commit Message Format](#commit-message-format)
  - [Type](#type)
  - [Subject](#subject)
  - [Body](#body-optional)
  - [Footer](#footer-optional)

## Contribution Strategy

All contributions to this repository should be in the form of pull requests. Features, fixes, etc. that are intended to be released in the _next_ application version should target the `staging` branch. If a pull request is a subset of a larger feature, and is not yet ready for release, then it should target a long-running feature branch; only when the entire feature is ready for release should it a pull request targeting the `staging` branch be opened.

When a release candidate has been identified, a pull request should be opened from the `staging` branch, targeting the `master` branch. Upon a merge into `master`, our [automated workflows](README.md#automation) will handle the release automatically.

## Development Environment

### [Node.js](https://nodejs.org/)

This project uses version [`14`](https://nodejs.org/dist/latest-v14.x/docs/api/) of Node along with its associated Node Package Manager ([NPM](https://docs.npmjs.com/cil/npm)).

It is recommended that you use only NPM to handle this project's package installation and package locking (via [`package-lock.json`](https://docs.npmjs.com/files/package-lock.json)).

If you contribute to multiple projects which require different Node versions, we recommend the usage of a Node Version Manager (using a version appropriate for your shell, i.e. [bash](https://github.com/nvm-sh/nvm) or [fish](https://github.com/jorgebucaran/fish-nvm)) to make the manipulation of node versions supplied in your `PATH` variable easier.

### [EditorConfig](https://editorconfig.org)

This project enforces file structuring via EditorConfig. A [plugin for your editor](https://editorconfig.org/#download) leveraging the [`.editorconfig`](.editorconfig) rules to auto-format your files is recommended.

### [ESLint](https://eslint.org/)

This project promotes consistent code styling and practices through the use of ESLint. A plugin leveraging the project-version of ESLint to extend syntax highlighting is recommended.

## Commit Message Guidelines

This repository enforces a standard for our commit messages, extending [Angular's commit message guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit), which is an implementation of the [Conventional Commit](https://www.conventionalcommits.org/) standard.

Following a standard for our commit messages affords our CI/CD pipeline the ability to generate changelogs which outline what is happening in any given release, as well as automatically determine if we should create a new release. This leads to less project management, and more time for developers to contribute to the repository.

### Commit Message Format
Each commit message consists of a **header**. Optionally, a **body** and **footer** may be included, padded with a blank line in between each element.

A header has a special format that includes a **type** and a **subject**:

```
<type>: <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier to read on GitHub as well as in various git tools.

### Type
Must be one of the following:

* **build**: Changes that affect the build system or external dependencies
* **ci**: Changes to our CI configuration files and scripts
* **docs**: Changes to documentation
* **feat**: A new feature
* **fix**: A bug fix
* **perf**: A code change that improves performance
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **release**: A change to project versions, denoting a project release
  * Primarily done through CI/CD, accompanied by the creation of a [GitHub Release](https://help.github.com/en/articles/about-releases).
* **revert**: A reversion of a previous commit
  * The header should be followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* **test**: Adding missing tests or correcting existing tests

### Subject
The subject contains a succinct description of the change:

* use the imperative, present tense (e.g. "change" not "changed" nor "changes")
* do not capitalize the first letter
* no dot (.) at the end

### Body (optional)
Just as in the **subject**, use the imperative, present tense.

The body should include the motivation for the change and contrast this with previous behavior.

### Footer (optional)
The footer should contain any information about **Breaking Changes** or references for [closing an issue](https://help.github.com/articles/closing-issues-via-commit-messages/), if any.

**Breaking Changes** should be prefixed with `BREAKING CHANGE:` followed by a space or two newlines. The rest of the commit message is then used to describe the breaking change.
