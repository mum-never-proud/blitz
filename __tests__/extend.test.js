import $ from '../src/blitz';

describe('extend', function() {
  describe('any object', function() {
    it('should extend any object when multiple arguments are passed', function() {
      let obj = {};

      expect(obj.tootltip).toEqual(undefined);

      $.extend(obj, { tooltip: () => {} });

      expect(obj.tooltip).not.toEqual(undefined);
    });
  });

  describe('blitz object', function() {
    it('should extend blitz when single argument is passed', function() {
      expect($.fn.tooltip).toEqual(undefined);
      $.extend({ tooltip: () => {} });
      expect($.fn.tooltip).not.toEqual(undefined);
    });
  });

  describe('extending a string', function() {
    it('should throw error on extending string', function() {
      expect(() => $.extend('blitz', 'blitz')).toThrow(Error);
    });
  });
});
