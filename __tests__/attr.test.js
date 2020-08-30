import $ from 'src/blitz';

describe('attr', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id ="blitz-container" title="replaceable title">replaceable content</div>';
  });

  test('should replace content of an element', () => {
    const text = 'blitz test text';
    const blitzContainer = $('#blitz-container');

    blitzContainer.attr('title', text);

    expect(blitzContainer.attr('title')).toEqual(text);
  });

  test('should add multiple classes', () => {
    expect($('#blitz-container').attr('title')).toEqual('replaceable title');
  });
});
