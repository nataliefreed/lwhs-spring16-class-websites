//See "Accessing Processing from Javascript"
//http://processingjs.org/articles/jsQuickStart.html

var p; //processing instance

var red = function() {
  if (!p) {
    p = Processing.getInstanceById('sketch');
  }
  p.background(255, 0, 0);
}

var blue = function() {
  if (!p) {
    p = Processing.getInstanceById('sketch');
  }
  p.background(0, 0, 255);
}

var latest = function() {
  var request = new XMLHttpRequest();
  request.open("GET", "http://api.icndb.com/jokes/random?exclude=[explicit]", false);
  request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
        var answer = JSON.parse(request.responseText);
          if (!p) {
            p = Processing.getInstanceById('sketch'); //undefined! why?!
            console.log(p);
          }
          p.setJoke(answer.value.joke)
          console.log(answer.value.joke);
      }
  };
  request.send();
};

setInterval(latest, 5000); //get a new joke every 5 seconds