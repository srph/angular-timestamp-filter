describe('filter', function() {
  beforeEach(module('srph.timestamp-filter'));

  it('should parse input to timestamp', function() {
    inject(function(timestampFilter) {
      expect(timestampFilter('11/23/1996')).toEqual(Date.parse('11/23/1996'));
      expect(timestampFilter('12-25-2014 12:00:00')).toEqual(Date.parse('12-25-2014 12:00:00'));

      // Manual
      expect(timestampFilter('11/23/1996 00:00:00')).toEqual(848678400000);
    });
  });
});