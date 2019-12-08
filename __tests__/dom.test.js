import $ from '../src/blitz';

function createElement(elementType, options) {
  let element = document.createElement(elementType), opt;

  for (opt in options) {
    element[opt] = options[opt];
  }

  return element;
}

describe('dom', function() {
  let blitzParent, blitzContainer;

  describe('prepend', function() {
    beforeEach(function() {
      document.body.innerHTML = '<div id="blitz-parent-container"><div id="blitz-container" /></div>';
      blitzParent = $('#blitz-parent-container');
      blitzContainer = $('#blitz-container');
    });

    it('should prepend element of type "node"', function() {
      let newNode = createElement('p', { id: 'new-node' });

      blitzParent.prepend(newNode);

      expect(document.getElementById('blitz-parent-container').firstChild).toBe(newNode);
    });

    it('should prepend element of type "node"', function() {
      blitzParent.prepend('<p id="new-node" />');

      expect(document.getElementById('blitz-parent-container').firstChild.id).toBe('new-node');
    });

    it('should prepend all the elements in a collection', function() {
      let collection = ['<p id = "new-node-1" />', createElement('p', { id: 'new-node-2' })];

      blitzParent.prepend(collection);

      expect(document.getElementById('blitz-parent-container').children[0].id).toBe('new-node-1');
      expect(document.getElementById('blitz-parent-container').children[1].id).toBe('new-node-2');
    });

    it('should prepend in absence of children', function() {
      blitzContainer.remove();
      let collection = ['<p id = "new-node-1" />', createElement('p', { id: 'new-node-2' })];

      expect(blitzParent.children().length).toEqual(0);

      blitzParent.prepend(collection);

      expect(document.getElementById('blitz-parent-container').children[0].id).toBe('new-node-1');
      expect(document.getElementById('blitz-parent-container').children[1].id).toBe('new-node-2');
    });
  });

  describe('append', function() {
    beforeEach(function() {
      document.body.innerHTML = '<div id="blitz-parent-container"><div id="blitz-container" /></div>';
      blitzParent = $('#blitz-parent-container');
      blitzContainer = $('#blitz-container');
    });

    it('should append element of type "node"', function() {
      let newNode = createElement('p', { id: 'new-node' });

      blitzParent.append(newNode);

      expect(document.getElementById('blitz-parent-container').lastChild).toBe(newNode);
    });

    it('should append element of type "string"', function() {
      blitzParent.append('<p id="new-node" />');

      expect(document.getElementById('blitz-parent-container').lastChild.id).toBe('new-node');
    });

    it('should append all the elements in a collection', function() {
      let collection = ['<p id = "new-node-1" />', createElement('p', { id: 'new-node-2' })];

      blitzParent.append(collection);

      expect(document.getElementById('blitz-parent-container').children[1].id).toBe('new-node-1');
      expect(document.getElementById('blitz-parent-container').children[2].id).toBe('new-node-2');
    });

    it('should append in absence of children', function() {
      blitzContainer.remove();
      let collection = ['<p id = "new-node-1" />', createElement('p', { id: 'new-node-2' })];

      expect(blitzParent.children().length).toEqual(0);

      blitzParent.append(collection);

      expect(document.getElementById('blitz-parent-container').children[0].id).toBe('new-node-1');
      expect(document.getElementById('blitz-parent-container').children[1].id).toBe('new-node-2');
    });
  });

  describe('before', function() {
    beforeEach(function() {
      document.body.innerHTML = '<div id="blitz-parent-container" /></div>';
      blitzParent = $('#blitz-parent-container');
    });

    it('should insert element before of type "node"', function() {
      let newNode = createElement('p', { id: 'new-node' });

      blitzParent.before(newNode);

      expect(document.body.firstChild).toBe(newNode);
    });

    it('should insert element before of type "string"', function() {
      blitzParent.before('<p id="new-node" />');

      expect(document.body.firstChild.id).toBe('new-node');
    });

    it('should insert all the elements before in a collection', function() {
      let collection = ['<p id = "new-node-1" />', createElement('p', { id: 'new-node-2' })];

      blitzParent.before(collection);

      expect(document.body.children[0].id).toBe('new-node-1');
      expect(document.body.children[1].id).toBe('new-node-2');
    });
  });

  describe('after', function() {
    beforeEach(function() {
      document.body.innerHTML = '<div id="blitz-parent-container" /></div>';
      blitzParent = $('#blitz-parent-container');
    });

    it('should insert element after of type "node"', function() {
      let newNode = createElement('p', { id: 'new-node' });

      blitzParent.after(newNode);

      expect(document.body.lastChild).toBe(newNode);
    });

    it('should insert element after of type "string"', function() {
      blitzParent.after('<p id="new-node" />');
      expect(document.body.lastChild.id).toBe('new-node');
    });

    it('should insert all the elements after in a collection', function() {
      let collection = ['<p id = "new-node-1" />', createElement('p', { id: 'new-node-2' })];

      blitzParent.after(collection);

      expect(document.body.children[1].id).toBe('new-node-1');
      expect(document.body.children[2].id).toBe('new-node-2');
    });
  });

  describe('misc', function() {
    it('should list the children', function() {
      document.body.innerHTML = '<div id="blitz-parent-container"><div id="blitz-container-1"></div><div id="blitz-container-2"></p></div>';

      expect($('#blitz-parent-container').children().length).toEqual(2);
    });

    it('should slice the nth element from selected elements', function() {
      document.body.innerHTML = '<div /><div id="sliced-element" /><div />';

      let div = $('div');

      expect(div.length).toEqual(3);
      expect(div.eq(1).length).toEqual(1);
    });
  });
});
