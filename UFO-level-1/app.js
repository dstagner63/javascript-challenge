// Get a reference to the table body. 
var tbody = d3.select("tbody");

// Get the data from data.js
console.log(data);

// // Loop through data and console.log each UFO siting
// data.forEach(function(sitings) {
//   console.log(sitings);
// });

// // Use D3 to append one table row for each siting object
// data.forEach(function(sitings) {
//   console.log(sitings);
//   var row =  tbody.append("tr");
// });

// // Use Object.entries to console.log each UFO siting report info
// data.forEach(function(sitings) {
//   console.log(sitings);
//   var row =  tbody.append("tr");

//   Object.entries(sitings).forEach(function([key, value]) {
//     console.log(key, value);
//   });
// });

// Use D3 to append 1 cell per UFO siting report
data.forEach(function(sitings) {
  console.log(sitings);
  var row =  tbody.append("tr");

  Object.entries(sitings).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
  });
});

// // Select the button
// var button = d3.select("#filter_btn");

// // Select the form
// var form = d3.select("#form");

// // Create event handlers 
// button.on("click", runEnter);
// form.on("submit",runEnter);

// // Complete the event handler function for the form
// function runEnter() {

//   // Prevent the page from refreshing
//   d3.event.preventDefault();
  
//   // Select the input element and get the raw HTML node
//   var inputElement = d3.select("#datetime");

//   // Get the value property of the input element
//   var inputValue = inputElement.property("value");

//   console.log(inputValue);
//   console.log(tableData);

//   var filteredData = tableData.filter(siting => siting.datetime === inputValue);

//   console.log(filteredData);

//   var date = tableData.datetime;
  // var date = tableData.map(siting => siting.datetime);
  // var city = tableData.map(siting => siting.city);
  // var state = tableData.map(siting => siting.state);
  // var country = tableData.map(siting => siting.country);
  // var shape = tableData.map(siting => siting.shape);
  // var duration = tableData.map(siting => siting.durationMinutes);
  // var comments = tableData.map(siting => siting.comments);


// };
