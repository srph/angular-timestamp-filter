describe('filter', function() {
  beforeEach(module('srph.timestamp-filter'));

  it('should be equal to Date.parse of the same date', function() {
    inject(function(timestampFilter) {
      expect(timestampFilter('11/23/1996')).toEqual(Date.parse('11/23/1996'));
      expect(timestampFilter('12-25-2014 12:00:00')).toEqual(Date.parse('12-25-2014 12:00:00'));
    });
  });
});