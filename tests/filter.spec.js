describe('filter', function() {
  beforeEach(module('srph.timestamp-filter'));
  
  var filter;
  beforeEach(inject(function(timestampFilter) {
      filter = timestampFilter;
  }));

  it('should be equal to Date.parse of the same date', function() {
    expect(filter('11/23/1996')).toEqual(Date.parse('11/23/1996'));
    expect(filter('12-25-2014 12:00:00')).toEqual(Date.parse('12-25-2014 12:00:00'));
  });
});
