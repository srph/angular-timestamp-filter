+function(angular, undefined) {
  'use strict';
  angular
    .module('srph.timestamp-filter', [])
    .filter('timestamp', filter);

  function filter() {
    return function filterFn(input) {
      return ( Date.parse(input) );
    }
  }
}(angular);