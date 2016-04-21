$().ready(function(){
  var search = 'https://www.google.com/search?';
  $('#search_in').change(function(){
    var val = $('#search_in').val();
    $('#search_out').attr('href', search + 'q=' + val);
  });
});
