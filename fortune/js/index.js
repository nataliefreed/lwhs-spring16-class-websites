
//See "Accessing Processing from Javascript"
//http://processingjs.org/articles/jsQuickStart.html

var p; //processing instance

var nFortune = function() {
  if (!p) {
    p = Processing.getInstanceById('sketch');
  }
  p.newFortune();
}

var latest = function() {
  var request = new XMLHttpRequest();
  var id = Math.round(Math.random(1)*100);
  request.open("GET", "http://fortunecookieapi.com/v1/fortunes?limit=1&skip="+id+"&page=page", false);
  request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
        var answer = JSON.parse(request.responseText);
          if (!p) {
            p = Processing.getInstanceById('sketch');
            console.log(p);
          }
          console.log(answer[0]);
          p.setFortune(answer[0].message)
          console.log(answer[0].message);
      }
  };
  request.send();
};