describe('filter', function() {
  beforeEach(module('srph.timestamp-filter'));
  
  var filter;
  beforeEach(inject(function(timestampFilter) {
      filter = timestampFilter;
  }));

  it('should be equal to Date.parse of the same date', function() {
    expect(filter('12-25-2014 12:00:00')).toEqual(Date.parse('12-25-2014 12:00:00'));
  });
  
  // 11-23-1996 to 11/23/1996
  it('should convert dashes to slashes when a string is passed to fix incompatibility issue', function() {
    var date = '11-23-1996';
    
    spyOn(date, 'replace').and.returnValue('11/23/1996');
    expect(filter('11/23/1996')).toEqual(Date.parse(date));
    expect(date.replace).toHaveBeenCalled();
  });
});
