$('.tab-links').on('click', function(event) {
  let module = `#${$(event.target).text().toLowerCase()}`;

  $('.tab-content').hide();
  $(module).show();
});