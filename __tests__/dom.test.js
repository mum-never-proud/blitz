import $ from 'src/blitz';

function createElement(elementType, options) {
  const element = document.createElement(elementType);

  Object.keys(options)
    .forEach((key) => {
      element[key] = options[key];
    });

  return element;
}

describe('dom', () => {
  describe('prepend', () => {
    beforeEach(() => {
      document.body.innerHTML = '<div id="blitz-parent-container"><div id="blitz-container"></div></div>';
    });

    it('should place element(s) at the beginning of each element in the collection', () => {
      const blitzParent = $('#blitz-parent-container');

      blitzParent.prepend('<p id="new-node"></p>');

      expect(document.getElementById('blitz-parent-container').firstChild.id).toBe('new-node');
    });

    it('should place HTML String at the beginning of each element in the collection', () => {
      const blitzParent = $('#blitz-parent-container');

      blitzParent.prepend('<p id="new-node"></p>');

      expect(document.getElementById('blitz-parent-container').firstChild.id).toBe('new-node');
    });

    it('should place array of elements at the beginning of each element in the collection', () => {
      const collection = ['<p id = "new-node-1"></p>', createElement('p', { id: 'new-node-2' })];
      const blitzParent = $('#blitz-parent-container');

      blitzParent.prepend(collection);

      expect(document.getElementById('blitz-parent-container').children[0].id).toBe('new-node-1');
      expect(document.getElementById('blitz-parent-container').children[1].id).toBe('new-node-2');
    });
  });

  describe('append', () => {
    beforeEach(() => {
      document.body.innerHTML = '<div id="blitz-parent-container"><div id="blitz-container"></div></div>';
    });

    it('should append element(s) to each element in the collection', () => {
      const newNode = createElement('p', { id: 'new-node' });
      const blitzParent = $('#blitz-parent-container');

      blitzParent.append(newNode);

      expect(document.getElementById('blitz-parent-container').lastChild).toBe(newNode);
    });

    it('should append HTML String to each element in the collection', () => {
      const blitzParent = $('#blitz-parent-container');

      blitzParent.append('<p id="new-node"></p>');

      expect(document.getElementById('blitz-parent-container').lastChild.id).toBe('new-node');
    });

    it('should append array of elements to each element in the collection', () => {
      const collection = ['<p id = "new-node-1"></p>', createElement('p', { id: 'new-node-2' })];
      const blitzParent = $('#blitz-parent-container');

      blitzParent.append(collection);

      expect(document.getElementById('blitz-parent-container').children[1].id).toBe('new-node-1');
      expect(document.getElementById('blitz-parent-container').children[2].id).toBe('new-node-2');
    });
  });

  describe('before', () => {
    beforeEach(() => {
      document.body.innerHTML = '<div id="blitz-parent-container"></div>';
    });

    it('should place element(s) before each element in the collection', () => {
      const newNode = createElement('p', { id: 'new-node' });
      const blitzParent = $('#blitz-parent-container');

      blitzParent.before(newNode);

      expect(document.body.firstChild).toBe(newNode);
    });

    it('should place HTML String before each element in the collection', () => {
      $('#blitz-parent-container').before('<p id="new-node"></p>');

      expect(document.body.firstChild.id).toBe('new-node');
    });

    it('should place array of elements before each element in the collection', () => {
      const collection = ['<p id = "new-node-1"></p>', createElement('p', { id: 'new-node-2' })];

      $('#blitz-parent-container').before(collection);

      expect(document.body.children[0].id).toBe('new-node-1');
      expect(document.body.children[1].id).toBe('new-node-2');
    });
  });

  describe('after', () => {
    beforeEach(() => {
      document.body.innerHTML = '<div id="blitz-parent-container"></div>';
    });

    it('should place element(s) after each element in the collection', () => {
      const newNode = createElement('p', { id: 'new-node' });

      $('#blitz-parent-container').after(newNode);

      expect(document.body.lastChild.id).toBe('new-node');
    });

    it('should place HTML String after each element in the collection', () => {
      $('#blitz-parent-container').after('<p id="new-node"></p>');

      expect(document.body.lastChild.id).toBe('new-node');
    });

    it('should place array of elements after each element in the collection', () => {
      const collection = ['<p id = "new-node-1"></p>', createElement('p', { id: 'new-node-2' })];

      $('#blitz-parent-container').after(collection);

      expect(document.body.children[1].id).toBe('new-node-1');
      expect(document.body.children[2].id).toBe('new-node-2');
    });
  });

  describe('misc', () => {
    it('should get children of the first element in the collection', () => {
      document.body.innerHTML = '<div id="blitz-parent-container"><div id="blitz-container-1"></div><div id="blitz-container-2"></div></div></div>';

      expect($('#blitz-parent-container').children().length).toEqual(2);
    });

    it('should get child nodes of the first element in the collection', () => {
      // child nodes include textNodes as well
      document.body.innerHTML = '<div id="blitz-parent-container">Hello <div id="blitz-container-1"></div><div id="blitz-container-2"></div></div>';

      expect($('#blitz-parent-container').childNodes().length).toEqual(3);
    });

    it('should check if the first element in the collection contains the given element', () => {
      document.body.innerHTML = '<div id="blitz-parent-container">Hello <div id="blitz-container-1"></div><div id="blitz-container-2"></div></div>';

      expect($('#blitz-parent-container').contains(document.getElementById('blitz-container-1'))).toBeTruthy();
      expect($('#blitz-parent-container').contains(document.body)).toBeFalsy();
    });

    it('should slice the nth element from the collection', () => {
      document.body.innerHTML = '<div></div><div id="sliced-element"></div><div></div>';

      const div = $('div');

      expect(div.length).toEqual(3);
      expect(div.eq(1).length).toEqual(1);
    });
  });
});
