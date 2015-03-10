describe('filter', function() {
  beforeEach(module('srph.timestamp-filter'));
  
  var filter;
  beforeEach(inject(function(timestampFilter) {
      filter = timestampFilter;
  }));

  it('should be equal to Date.parse of the same date', function() {
    expect(filter('12/25/2014 12:00:00')).toEqual(Date.parse('12/25/2014 12:00:00'));
  });

  describe('dash to slash conversion', function() {
    // To test the regex used in the filter
    describe('dash regex', function() {
      // Let's first test if it matches strings with dashes
      it('should match dashes', function() {
        expect(/\-/g.test('-\\1zxcqw-/zxc12346--8-O')).toBe(true);
      });

      it('should not match string with no dashes', function() {
        expect(/\-/g.test('asdlkajlskdasd/asda\\')).toBe(false);
      })
      
      // Let's test if our regex actually converts all dashes to slashes
      it('should convert all dash to slash', function() {
        expect('------'.replace(/\-/g, '/')).toEqual('//////');
      });

      it('should convert all dash to kier-pogi', function() {
        expect('------'.replace(/\-/g, 'kier-pogi')).toEqual('kier-pogikier-pogikier-pogikier-pogikier-pogikier-pogi');
      });
    });

    it('should occur when a string is passed to fix incompatibility issue', function() {
      var date = '11-23-1996';
      
      spyOn(String.prototype, 'replace').and.returnValue('11/23/1996');
      expect(filter(date)).toEqual(Date.parse('11/23/1996'));
      expect(String.prototype.replace).toHaveBeenCalled();
    });

    it('should not occur when the provided date is not a string', function() {
      spyOn(String.prototype, 'replace');
      filter(new Date());
      expect(String.prototype.replace).not.toHaveBeenCalled();
    });
  });
});
