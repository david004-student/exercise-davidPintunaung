var xArray = ["Indonesia", "Taiwan", "China", "USA", "Malaysia"];
var yArray = [55 ,49, 44, 24, 15];

var data = [{
    x:xArray,
    y:yArray,
    type:"bar"
}];

var layout = {title:"World Wide Wine Production"};

var data = [{labels:xArray, values:yArray, hole:.4, type:"pie"}];

Plotly.newPlot("myPlot", data, layout);