var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();

  request.addEventListener('load', callback);

  request.open('GET', url);
  request.send();
}

var requestComplete = function() {
  //console.log(this)
  if (this.status !== 200) return;
  var jsonString = this.responseText;
  // console.log("Yo")
  // beers = JSON.parse(jsonString);
  // populateList(beers);
}


var app = function () {
  var url = 'https://api.punkapi.com/v2/beers';
  makeRequest(url, requestComplete);
  // var selectList = document.querySelector('select');
  // selectList.addEventListener('change', handleSelectChange);
}

window.addEventListener('load', app);
