// Get a reference to the id property set to "filter-btn"
var button = d3.select("#filter-btn");

// Get a reference to the input element on the page with the id prperty set to ""
var inputField = d3.select("#input-field");

// This function is triggered when the button is clicked
function handleClick() {
  console.log("a button was clicked");
  // Use d3 to see the object that dispatched the event
  console.log(d3.event.target);
}

// Use the 'on' function in d3 to attach an event to the handler function
button.on("click", handleClick);

// Define the click handler inline
button.on("click", function() {
  console.log("Hi, a button was clicked!");
  console.log(d3.event.target);
});





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


