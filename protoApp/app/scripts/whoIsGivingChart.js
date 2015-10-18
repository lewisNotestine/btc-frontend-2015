    
var renderWhoIsGivingChart = function() {
    var svg = dimple.newSvg("#whoIsGivingChart", 590, 400);
    d3.csv("who-is-giving.csv", function (data) {

      //HACK. for some reason jquery.each() wasn't working that well for this... 
      var dataKeys = Object.keys(data[0]);
      for (var i = 0; i < data.length; i++) { 
        var key = dataKeys[i];        
        var intValue = parseInt(data[0][key]);  
        data[0][key] = intValue;
      } 

      var myChart = new dimple.chart(svg, data);
      myChart.setBounds(60, 30, 510, 305)
      var x = myChart.addCategoryAxis("x", "Source");
    
      myChart.addMeasureAxis("y", "Amount (millions)");
      myChart.addSeries(null, dimple.plot.bar);
      myChart.draw();
    });
}