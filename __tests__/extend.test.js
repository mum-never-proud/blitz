import $ from 'src/blitz';

describe('source(s) provided', () => {
  describe('any object', () => {
    it('should extend the given object when one or more sources are provided', () => {
      const obj = {};

      expect(obj.tootltip).toEqual(undefined);

      $.extend(obj, { tooltip: () => {} });

      expect(obj.tooltip).not.toEqual(undefined);
    });
  });

  describe('no soruce(s) provided', () => {
    it('should extend blitz', () => {
      expect($.tooltip).toEqual(undefined);
      $.extend({ tooltip: () => {} });
      expect($.tooltip).not.toEqual(undefined);
    });
  });

  describe('extending a string', () => {
    it('should throw error on extending non object', () => {
      expect(() => $.extend('blitz', 'blitz')).toThrow(Error);
    });
  });
});
