
// Get a reference to the table body. 
var tbody = d3.select("tbody");

// Get the data from data.js
console.log(data);

// Loop through the data and use D3 to append 1 cell per UFO siting report
data.forEach(function(sitings) {
  console.log(sitings);
  var row =  tbody.append("tr");

  Object.entries(sitings).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
  });
});


// Get a reference to the id property set to "filter-btn"
var button = d3.select("#filter-btn");

// Define the click handler inline
button.on("click", function() {
  console.log("Hi, a button was clicked!");
 // console.log(d3.event.target);

 tbody.html("");


 //filter data
 var inputvalue = d3.select("#datetime");
 var newValue = inputvalue.property("value");

var filteredData = data.filter(d => d.datetime === newValue);

filteredData.forEach(function(sitings) {
  console.log(sitings);
  var row =  tbody.append("tr");

  Object.entries(sitings).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
  });
});


console.log(filteredData);

});

