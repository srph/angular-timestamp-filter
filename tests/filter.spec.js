describe('filter', function() {
  beforeEach(module('srph.timestamp-filter'));

  it('should parse input to timestamp', function() {
    inject(function(timestamp) {
      expect(timestamp('11/23/1996')).toBe(Date.parse('11/23/1996'));
      expect(timestamp('12-25-2014 12:00:00')).toBe(Date.parse('12-25-2014 12:00:00'));

      // Manual
      expect(timestamp('12-25-2014 12:00:00')).toBe(1416888000000);
    });
  });
});