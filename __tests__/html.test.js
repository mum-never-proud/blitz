import $ from 'src/blitz';

describe('klass', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id ="blitz-container">replaceable content</div>';
  });

  test('should set the HTML contents for each element in the collection', () => {
    const text = 'blitz test text';
    const blitzContainer = $('#blitz-container');

    blitzContainer.html(text);

    expect(blitzContainer.elements[0].innerHTML).toEqual(text);
  });

  test('should get the HTML contents of the first element in the collection', () => {
    expect($('#blitz-container').html()).toEqual('replaceable content');
  });
});
