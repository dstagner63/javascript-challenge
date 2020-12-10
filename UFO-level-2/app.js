
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

 tbody.html("");


 //filter data
 var inputdate = d3.select("#datetime");
 var newDate = inputdate.property("value");

 var inputcity = d3.select("#city");
 var newCity = inputcity.property("value");

 var inputState = d3.select("#state");
 var newState = inputState.property("value");

 var inputCountry = d3.select("#country");
 var newCountry = inputCountry.property("value");

 var inputShape = d3.select("#shape");
 var newShape = inputShape.property("value");


 // Research this
var filteredData = data.filter(((d => d.datetime === newDate)  || (!newDate))
  &&
 

  ((d => d.city === newCity)  || (!newCity))   &&
  // ((d => d.state === newState)  || (!newState)) &&
  // ((d => d.country === newCountry)  || (!newCountry)) &&
  // ((d => d.shape === newShape)  || (!newShape))

  );


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

