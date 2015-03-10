# Building

If you are looking to contribute to the project, come aboard! Otherwise, I don't find this documentation to be of any use to you.

This project uses [**Jasmine**](http://jasmine.github.io/edge/introduction.html) (testing framework), and [Karma](karma-runner.github.io) (our test runner).

\* Note that the following code blocks will contain `$` **only** to indicate that it is a terminal command. Omit it when copying the command (e.g., run `brew install node npm` instead of `$ brew install node npm`).

## Requirements

You don't need *really* anything besides **node.js** and **npm**.

### Debian-based distro

**Ubuntu**, **Linux Mint**, etc..):

```bash
$ sudo apt-get install nodejs-legacy npm
```

### OSX ([Homebrew](https://github.com/homebrew/homebrew/))

```bash
$ brew install node npm
```

### Windows

You can grab **node.js** installer (which bundle comes along with **npm**) at the [**node.js** website](https://nodejs.org).

## Setup

**Clone the repository**

```bash
$ git clone https://github.com/srph/angular-timestamp-filter.git

## don't forget to switch directory to the cloned repository!
$ cd angular-timestamp-filter
```

**Install dependencies**

```bash
$ npm install

# only if you haven't installed bower (asset package manager)
$ npm install bower -g

$ bower install
```

## Automation

```bash
$ npm test # run the tests
$ npm run uglify # uglify the script
```

### Style Guide

- Use semicolons;
- Commas last,
- 2 spaces for indentation (no tabs)
- Prefer ' over "
- "use strict";
- 80 character line length
- "Attractive"