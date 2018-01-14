var button = $('#reveal-button');

var hiddenElement = $('#hideaway');

button.click(function () {
  if (hiddenElement.attr('style') == 'display:none;') {
    hiddenElement.attr('style', 'display:block;');
    button.text('HIDE');
  }
  else {
    hiddenElement.attr('style', 'display:none;');
    button.text('REVEAL');
  }
});
