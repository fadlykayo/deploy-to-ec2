$(document).ready(function () {
  getQuotes()
})

function getQuotes () {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/api/quote',
    success: function (resp) {
      for (var i = 0; i < resp.length; i++) {
        let quotes = resp[i]
        $('#list-quotes').append(
          `
          <div class="row">
            <div class="col l12">
              <div class="card blue lighten-3">
                <div class="card-content white-text">
                  <span class="card-title">Quote #${i+1}:</span>
                  <p>${quotes.content} <em>${quotes.creator}</em></p>
                </div>
              </div>
            </div>
          </div>
          `
        )
      }
    },
    error: function () {
      console.log('GET Quotes Response Error')
    }
  })
}
