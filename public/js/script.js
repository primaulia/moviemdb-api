$(function () {
  var url = 'https://api.themoviedb.org/3/movie/popular?api_key=83ebcfbe2592e4358658da3522dad3ff'

  var basePosterUrl = 'https://image.tmdb.org/t/p/w185'

  $.get(url, function (data) {
    console.log(data.results)
    var results = data.results

    results.forEach(function (movie) {
      var $div = $('<div class="four columns">')
      var $overview = $('<p>')
      $overview.text(movie.overview)

      $div
      .append('<h2>' + movie.title + '</h2>')
      .append($overview)
      .append('<img src="' + basePosterUrl + movie.poster_path + '"/>')
      .append('<br>')
      .append('<button>Add Review</button>')

      $('.row').append($div)
    })
  })
})
