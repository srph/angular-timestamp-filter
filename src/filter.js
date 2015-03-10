+function(angular, undefined) {
  "use strict";
  angular
    .module('srph.timestamp-filter', [])
    .filter('timestamp', filter);

  function filter() {
    return function(input) {
      // We will replace `-` with `/` because Firefox does not seem to support `-` in Dates.
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
      // http://stackoverflow.com/questions/11516332/date-parse-results-in-nan
      return Date.parse( angular.isString(input) ? input.replace(/\-/g, '/') : input );
    }
  }
}(angular);