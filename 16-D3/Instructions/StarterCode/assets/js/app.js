// @TODO: YOUR CODE HERE!

//SVG area dimensions
var svgWidth = 500;
var svgHeight = 650;

//chart margins
var margin = {top: 20,right: 40,bottom: 80,left: 100};

//dimension of chart area
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.bottom - chartMargin.top;

//select scatter
var svg = d3.select("#scatter")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// Load csv data
d3.csv("data.csv", function(error, newsData) {

  if (error) return console.warn(error);

  console.log(newsData);
    
// Data as numbers
newsData.forEach(function(data) {
    data.poverty = +data.poverty; 
    data.healthcare = +data.healthcare;


d3.csv("assets/data/data.csv", function(error, newsData) {
    if (error) throw error;

    console.log(newsData);

 
 // Create the axes and scales
  var xLinearScale = d3.scaleLinear()
    .range([0, width]);
  var x_axis = d3.axisBottom(xScale);

  var yLinearScale = d3.scaleLinear()
    .range([height, 0]);
  var y_axis = d3.axisleft(yscale);

    xLinearScale.domain([8, d3.max(Data, function(data) {
    return data.poverty;  
  })])  
    yLinearScale.domain([0, d3.max(Data, function(data) {
    return data.healthcare;
  })])  

      //labels for x-axis 
    chartGroup.append("text")
        .attr("transform", `translate(${chartWidth/2 + 10 }, ${chartHeight + 10})`)
        .attr("text-anchor", "middle")
        .attr("font-size", "14px")
        .attr("font-weight", "bold")
        .text("In Poverty (%)");

    //label for y-axis
    chartGroup.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - chartMargin.left)
        .attr("x", 0 - (chartHeight / 2))
        .attr("dy", "2em")
        .style("text-anchor", "middle")
        .attr("font-size", "14px")
        .attr("font-weight", "bold")
        .text("Lacks Healthcare (%)"); 
    
    
  var tooltip = d3.tip(
    .attr("class", "tooltip")
    .offset([60, -40])
    .html(function(data) {
      return (data.abbr + "<br>" + "Poverty Rate: " + data.poverty);
    })
  

  // scale functions for x and y data
  var line = d3.line()
    .x(data => xScale(data.poverty))
    .y(data => yScale(data.healthcare));
  

  

});