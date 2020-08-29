import $ from '../src/blitz';

describe('klass', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id ="blitz-container">replaceable content</div>';
  });

  test('should replace content of an element', () => {
    const text = 'blitz test text';
    const blitzContainer = $('#blitz-container');

    blitzContainer.html(text);

    expect(blitzContainer.elements[0].innerHTML).toEqual(text);
  });

  test('should get content of an element', () => {
    expect($('#blitz-container').html()).toEqual('replaceable content');
  });
});
