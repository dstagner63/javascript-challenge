// Get a reference to the table body. Not sure if this is right???
var tbody = d3.select("tbody");

// Assign the data from data.js to a variable
var tableData = data;
console.log(tableData);

// Select the button
var button = d3.select("#filter_btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(siting => siting.datetime === inputValue);

  console.log(filteredData);

  var date = tableData.datetime;
  // var date = tableData.map(siting => siting.datetime);
  // var city = tableData.map(siting => siting.city);
  // var state = tableData.map(siting => siting.state);
  // var country = tableData.map(siting => siting.country);
  // var shape = tableData.map(siting => siting.shape);
  // var duration = tableData.map(siting => siting.durationMinutes);
  // var comments = tableData.map(siting => siting.comments);


};
