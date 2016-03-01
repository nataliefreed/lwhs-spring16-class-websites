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