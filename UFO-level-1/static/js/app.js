// from data.js
var tableData = data;

//Using the UFO dataset provided in the form of an array of JavaScript objects.
//Write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

//Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO data from data.js
console.log(data);

//Loop Through `data` and console.log for each UFO object
//Use d3 to append one table row `tr` for each UFO object
data.forEach(function(ufo) {
    console.log(ufo);
    var row = tbody.append("tr");

//Use a date form in your HTML document and write JavaScript code 
//that will listen for events and search through the `date/time` column to find rows that match user input.