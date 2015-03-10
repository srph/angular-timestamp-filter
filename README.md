angular-timestamp-filter
=====

[![Build Status](https://travis-ci.org/srph/angular-timestamp-filter.svg)](https://travis-ci.org/srph/angular-timestamp-filter) [![Bower version](https://badge.fury.io/bo/angular-srph-timestamp-filter.svg)](http://badge.fury.io/bo/angular-srph-timestamp-filter) [![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

Filter which parses date (```11/23/1996 12:23:42```) to timestamp.

For some reason, Angular's [```date``` filter](https://docs.angularjs.org/api/ng/filter/date) doesn't seem to be able to convert timestamp format `M-d-Y h:i:s` properly. This library allows you to convert your date (string or a Date instance) to a timestamp.

## Getting Started

### Requirements

Not sure if it works with versions Angular ```<=1.2```, but it should work fine (unless the ```Filter``` API changed) with Angular ```>=1.2```.

### Installation

```angular-timestamp-filter``` is available in [**bower**]

```bash
$ bower install angular-srph-timestamp-filter
```

While it is also possible to use a CDN (thanks to [RawGit](https://rawgit.com/)).

```
<!-- use this for examples or during development -->
https://rawgit.com/srph/angular-timestamp-filter/master/angular-timestamp-filter.js
<!-- or you could just forget about it and use this (recommended for production) -->
https://cdn.rawgit.com/srph/angular-timestamp-filter/master/angular-timestamp-filter.js
```

Include the script in your template (replace ```path/to/``` with its proper path) after AngularJS.
```html
<!-- make sure they are in proper order -->
<script src="path/to/angular.js"></script>
<!-- other scripts... -->
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

## Compatibility

\* As of version `v0.1.0`, `angular-timestamp-filter` [now harmonically works with Firefox `Date.parse` issue with dashes](http://stackoverflow.com/questions/11516332/date-parse-results-in-nan).

I have no time as of now, but you can check if there are issues with ```Date.parse```.

## Changelog

Check [Changelog](https://github.com/srph/angular-timestamp-filter/blob/master/doc/changelog.md).

## Contribution

I'd suggest to submit an issue first before putting up a pull-request as this avoids closed pull-requests; no wasted work. Feel free to put up an issue or submit a pull-request!

Not obligatory, but **don't forget to add tests**!

### Style Guide

- Use semicolons;
- Commas last,
- 2 spaces for indentation (no tabs)
- Prefer ' over "
- "use strict";
- 80 character line length
- "Attractive"
