$(function () {
  var url = 'https://api.themoviedb.org/3/movie/popular?api_key=83ebcfbe2592e4358658da3522dad3ff'

  $.get(url, function (data) {
    console.log(data.results)
    var results = data.results

    results.forEach(function (movie) {
      var $div = $('<div>')
      var $overview = $('<p>')
      $overview.text(movie.overview)

      $div
      .append('<h2>' + movie.title + '</h2>')
      .append($overview)
      .append('<button>Add Review</button>')

      $('.movie-list').append($div)
    })
  })
})
