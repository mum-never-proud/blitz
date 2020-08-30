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

    it('should append element of type "node"', () => {
      const newNode = createElement('p', { id: 'new-node' });
      const blitzParent = $('#blitz-parent-container');

      blitzParent.append(newNode);

      expect(document.getElementById('blitz-parent-container').lastChild).toBe(newNode);
    });

    it('should prepend element of type "node"', () => {
      const blitzParent = $('#blitz-parent-container');

      blitzParent.prepend('<p id="new-node"></p>');

      expect(document.getElementById('blitz-parent-container').firstChild.id).toBe('new-node');
    });

    it('should prepend all the elements in a collection', () => {
      const collection = ['<p id = "new-node-1"></p>', createElement('p', { id: 'new-node-2' })];
      const blitzParent = $('#blitz-parent-container');

      blitzParent.prepend(collection);

      expect(document.getElementById('blitz-parent-container').children[0].id).toBe('new-node-1');
      expect(document.getElementById('blitz-parent-container').children[1].id).toBe('new-node-2');
    });

    it('should prepend in absence of children', () => {
      $('#blitz-container').remove();

      const blitzParent = $('#blitz-parent-container');
      const collection = ['<p id = "new-node-1"></p>', createElement('p', { id: 'new-node-2' })];

      expect(blitzParent.children().length).toEqual(0);

      blitzParent.prepend(collection);

      expect(document.getElementById('blitz-parent-container').children[0].id).toBe('new-node-1');
      expect(document.getElementById('blitz-parent-container').children[1].id).toBe('new-node-2');
    });
  });

  describe('append', () => {
    beforeEach(() => {
      document.body.innerHTML = '<div id="blitz-parent-container"><div id="blitz-container"></div></div>';
    });

    it('should append element of type "node"', () => {
      const newNode = createElement('p', { id: 'new-node' });
      const blitzParent = $('#blitz-parent-container');

      blitzParent.append(newNode);

      expect(document.getElementById('blitz-parent-container').lastChild).toBe(newNode);
    });

    it('should append element of type "string"', () => {
      const blitzParent = $('#blitz-parent-container');

      blitzParent.append('<p id="new-node"></p>');

      expect(document.getElementById('blitz-parent-container').lastChild.id).toBe('new-node');
    });

    it('should append all the elements in a collection', () => {
      const collection = ['<p id = "new-node-1"></p>', createElement('p', { id: 'new-node-2' })];
      const blitzParent = $('#blitz-parent-container');

      blitzParent.append(collection);

      expect(document.getElementById('blitz-parent-container').children[1].id).toBe('new-node-1');
      expect(document.getElementById('blitz-parent-container').children[2].id).toBe('new-node-2');
    });

    it('should append in absence of children', () => {
      $('#blitz-container').remove();

      const collection = ['<p id = "new-node-1"></p>', createElement('p', { id: 'new-node-2' })];
      const blitzParent = $('#blitz-parent-container');

      expect(blitzParent.children().length).toEqual(0);

      blitzParent.append(collection);

      expect(document.getElementById('blitz-parent-container').children[0].id).toBe('new-node-1');
      expect(document.getElementById('blitz-parent-container').children[1].id).toBe('new-node-2');
    });
  });

  describe('before', () => {
    beforeEach(() => {
      document.body.innerHTML = '<div id="blitz-parent-container"></div>';
    });

    it('should insert element before of type "node"', () => {
      const newNode = createElement('p', { id: 'new-node' });
      const blitzParent = $('#blitz-parent-container');

      blitzParent.before(newNode);

      expect(document.body.firstChild).toBe(newNode);
    });

    it('should insert element before of type "string"', () => {
      $('#blitz-parent-container').before('<p id="new-node"></p>');

      expect(document.body.firstChild.id).toBe('new-node');
    });

    it('should insert all the elements before in a collection', () => {
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

    it('should insert element after of type "node"', () => {
      const newNode = createElement('p', { id: 'new-node' });

      $('#blitz-parent-container').after(newNode);

      expect(document.body.lastChild).toBe(newNode);
    });

    it('should insert element after of type "string"', () => {
      $('#blitz-parent-container').after('<p id="new-node"></p>');

      expect(document.body.lastChild.id).toBe('new-node');
    });

    it('should insert all the elements after in a collection', () => {
      const collection = ['<p id = "new-node-1"></p>', createElement('p', { id: 'new-node-2' })];

      $('#blitz-parent-container').after(collection);

      expect(document.body.children[1].id).toBe('new-node-1');
      expect(document.body.children[2].id).toBe('new-node-2');
    });
  });

  describe('misc', () => {
    it('should list the children', () => {
      document.body.innerHTML = '<div id="blitz-parent-container"><div id="blitz-container-1"></div><div id="blitz-container-2"></div></div></div>';

      expect($('#blitz-parent-container').children().length).toEqual(2);
    });

    it('should list the child nodes', () => {
      // child nodes include textNodes as well
      document.body.innerHTML = '<div id="blitz-parent-container">Hello <div id="blitz-container-1"></div><div id="blitz-container-2"></div></div>';

      expect($('#blitz-parent-container').childNodes().length).toEqual(3);
    });

    it('should slice the nth element from selected elements', () => {
      document.body.innerHTML = '<div></div><div id="sliced-element"></div><div></div>';

      const div = $('div');

      expect(div.length).toEqual(3);
      expect(div.eq(1).length).toEqual(1);
    });
  });
});
