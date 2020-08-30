import $ from 'src/blitz';

describe('attr', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id ="blitz-container" title="replaceable title">replaceable content</div>';
  });

  test('should set an attribute for each element in the collection', () => {
    const text = 'blitz test text';
    const blitzContainer = $('#blitz-container');

    blitzContainer.attr('title', text);

    expect(blitzContainer.attr('title')).toEqual(text);
  });

  test('should get the value of an attribute for the first element', () => {
    expect($('#blitz-container').attr('title')).toEqual('replaceable title');
  });
});
