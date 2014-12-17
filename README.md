angular-timestamp-filter
=====

[![Build Status](https://travis-ci.org/srph/angular-timestamp-filter.svg)](https://travis-ci.org/srph/angular-timestamp-filter)

Filter which parses date string (using Date) to timestamp. In technical terms, an angular filter wrapper for the native ```Date.parse```.

For some reason, Angular's ```date``` doesn't seem to be able to convert MySQL's timestamp format (```M-d-Y h:i:s```) properly. Whether Angular updates their ```date``` filter to support such format, it's also okay; this was a fun project to work with (first time testing with Angular, CI, all that stuff). Also, feel free to copy-paste the filter implementation if it suits you.

## Installation

You may install through Bower

```bash
$ bower install angular-srph-timestamp-filter
```

While it is also possible to use a CDN (thanks to [RawGit](https://rawgit.com/)). Use the first one for temporary examples or small projects; otherwise the second one for production
```
https://rawgit.com/srph/angular-timestamp-filter/master/angular-timestamp-filter.js
https://cdn.rawgit.com/srph/angular-timestamp-filter/master/angular-timestamp-filter.js
```

Include the script in your html (replace ```path/to/``` with to its path)
```html
<script src="path/to/angular-timestamp-filter.js"></script>
```

Add in the library's module to your module's dependencies:

```js
angular.module('your-app-name', [/** other deps */, 'srph.timestamp-filter']);
```

## Usage

Through html binding (delimiters ```{{}}```)
```html
{{ '11/23/1996' | timestamp }}
```

The most practical way to use this library is to integrate it with the ```date``` filter by Angular. For instance,

```html
{{ '11/23/1996 00:00:00' | timestamp | date: 'MMM d, yyyy' }}
<!-- should display Nov. 23, 1996 -->
```

## Changelog

### v0.0.1

- Initialized project
- Added basic implementation (since it is mainly a wrapper for ```Date.parse``` or ```new Date()```)

## Contribution

This is a very, very tiny wrapper for ```Date.parse```. But feel free to put up an issue or submit a pull-request for any update on Angular's ```date``` filter, or whatever :thumbsup:

### Style Guide

- Use semicolons;
- Commas last,
- 2 spaces for indentation (no tabs)
- Prefer ' over "
- "use strict";
- 80 character line length
- "Attractive"
- Do not use the optional parameters of setTimeout and setInterval

*(This was taken from the [ReactJS Contributing Guidelines](https://github.com/facebook/react/blob/master/CONTRIBUTING.md))*

**Don't forget to add tests.**