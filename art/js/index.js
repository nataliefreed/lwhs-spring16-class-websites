//See "Accessing Processing from Javascript"
//http://processingjs.org/articles/jsQuickStart.html

var p; //processing instance


var modern = function() {
  if (!p) {
    p = Processing.getInstanceById('sketch');
  }
  p.setMode("modern");
}

var abstract = function() {
  if (!p) {
    p = Processing.getInstanceById('sketch');
  }
  p.setMode("abstract");
}
var impressionist = function() {
  if (!p) {
    p = Processing.getInstanceById('sketch');
  }
  p.setMode("impressionist");
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
          console.log(answer.value.joke);
      }
  };
  request.send();
};

setInterval(latest(), 3000); //get a new joke every 5 seconds