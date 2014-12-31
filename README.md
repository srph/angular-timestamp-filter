angular-timestamp-filter
=====

[![Build Status](https://travis-ci.org/srph/angular-timestamp-filter.svg)](https://travis-ci.org/srph/angular-timestamp-filter)
[![Bower version](https://badge.fury.io/bo/angular-srph-timestamp-filter.svg)](http://badge.fury.io/bo/angular-srph-timestamp-filter)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

Filter which parses date string (```11/23/1996 12:23:42```, **...**) to timestamp.

## Getting Started

### Requirements

Not sure if it works with versions Angular ```<=1.2```, but it should work fine (unless the ```Filter``` API changed) with Angular ```>=1.2```.

\* I have no idea with browser compatibilities. I have no time as of now, but you can check if a certain browser implements ```Date.parse```.

### Installation

```angular-timestamp-filter``` is available in [Bower]

```bash
$ bower install angular-srph-timestamp-filter
```

While it is also possible to use a CDN (thanks to [RawGit](https://rawgit.com/)).

Use the first one for temporary examples or small projects; otherwise the second one for production
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

### Usage

Through html binding (delimiters ```{{}}```)
```html
{{ '11/23/1996' | timestamp }}
```

You can do the same thing with ```ng-bind```
```html
<span ng-bind="'11/23/1996' | timestamp"></span>
```

Or with ```$filter```
```js
MyController.$inject = ['$scope', '$filter'];

function MyController($scope, $filter) {
  $scope.date = $filter('timestamp')('11/23/1996');
}
```

The most practical way to use this library is to integrate it with the ```date``` filter by Angular. For instance,

```html
{{ '11/23/1996 00:00:00' | timestamp | date: 'MMM d, yyyy' }}
<!-- should display Nov. 23, 1996 -->
```

## Imporant Notes

In technical terms, this library is an angular filter wrapper for the native ```Date.parse```.

For some reason, Angular's ```date``` doesn't seem to be able to convert MySQL's timestamp format (```M-d-Y h:i:s```) properly. This library allows you to convert your date string to a timestamp, then to the ```date``` filter, check [Usage](#usage).

Whether Angular updates their ```date``` filter to support such format, it's also okay; this was a fun project to work with (first time testing with Angular, CI, all that stuff). Also, feel free to copy-paste the filter implementation if it suits you.

### Status

Currently version ```v0.0.1```

## Changelog

### v0.0.1

- Initialized project
- Added basic implementation (since it is mainly a wrapper for ```Date.parse``` or ```new Date()```)

## Contribution

This is a very, very tiny wrapper for ```Date.parse```. But feel free to put up an issue or submit a pull-request.

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
