window.onload = function(){

	var loadBtn = document.querySelector('#loadBtn');
	var httpRequest;

	loadBtn.addEventListener('click', function(element) {
    element.preventDefault();

    httpRequest = new XMLHttpRequest();

    // GET Request
    var url = "http://localhost:8080/superheroes.php";
    httpRequest.onreadystatechange = loadSearch;
    httpRequest.open('GET', url);
    httpRequest.send();
	});

	function loadSearch() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        var response = httpRequest.responseText;
        var gotit = document.querySelector('#demo');
        gotit.innerHTML = response;
        console.log(response);
      } else {
        alert('There was a problem with the request.');
      }
    }
  }


};