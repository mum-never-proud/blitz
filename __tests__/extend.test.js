import $ from 'src/blitz';

describe('extend', () => {
  describe('any object', () => {
    it('should extend any object when multiple arguments are passed', () => {
      const obj = {};

      expect(obj.tootltip).toEqual(undefined);

      $.extend(obj, { tooltip: () => {} });

      expect(obj.tooltip).not.toEqual(undefined);
    });
  });

  describe('blitz object', () => {
    it('should extend blitz when single argument is passed', () => {
      expect($.tooltip).toEqual(undefined);
      $.extend({ tooltip: () => {} });
      expect($.tooltip).not.toEqual(undefined);
    });
  });

  describe('extending a string', () => {
    it('should throw error on extending string', () => {
      expect(() => $.extend('blitz', 'blitz')).toThrow(Error);
    });
  });
});
