var xArray = ["Indonesia", "Taiwan", "China", "USA", "Malaysia"];
var yArray = [55 ,49, 44, 24, 15];

var data = [{
    x:xArray,
    y:yArray,
    type:"bar"
}];

var layout = {title:"World Wide Wine Production"};

Plotly.newPlot("myPlot", data, layout);