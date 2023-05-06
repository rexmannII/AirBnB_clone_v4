$(document).ready(function () {
  const amenList = {};
  $('input[type="checkbox"]').change(function () {
    if ($(this).is(':checked')) {
      amenList[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete amenList[$(this).attr('data-id')];
    }
    let text = Object.values(amenList).join(', ');
    if (text.length > 28) {
      text = text.slice(0, 28) + '...';
    }
    $('.amenities > h4').text(text);
  });
});
