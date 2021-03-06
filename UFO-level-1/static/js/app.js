// from data.js
var tableData = data;

//Using the UFO dataset provided in the form of an array of JavaScript objects.
//Write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

//Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.

// Get references
var tbody = d3.select("tbody");
var columns = ["datetime", "city", "state", "country", "shape", "comments"]

// Console.log the UFO data from data.js
console.log(tableData);

//Refactor to use Arrow Functions!
//Loop Through `data` and console.log for each UFO object
//Use d3 to append one table row `tr` for each UFO object

    tableData.forEach((ufo) => {
        var row = tbody.append("tr");
    
    //Use `Object.entries` to console.log each UFO value
    
         Object.entries(ufo).forEach(([key, value]) => {
      
    //Use d3 to append 1 cell per UFO entry value  
      
        var cell = row.append("td");
      
    //Use d3 to update each cell's text with UFO entry values  
      
        cell.text(value);
    });
});

//Use a date form in your HTML document and write JavaScript code 
//that will listen for events and search through the `date/time` column to find rows that match user input.


// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select(".form-control");
  console.log(inputElement);

  // Get the value property of the input element
  var inputValue = inputElement.property("value");



  console.log(inputValue);
  

  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
  console.log(filteredData);
  
};