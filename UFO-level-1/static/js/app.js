// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log data from data.js
console.log(data);

// // Step 1: Loop Through `data` and console.log each object
data.forEach(function(encounterData) {
    console.log(encounterData);
    });

// create a function for table data 
 function filter_date() {
     //clear table in order to output new info 
     tbody.html("");
    // Prevent the page from refreshing
     d3.event.preventDefault();
     // creating variable for date text from html
    var dateTime = d3.select("#datetime");
    // create a variable that will reference what is inside the datetime input
    var date = dateTime.property("value");
    // Print the value to the console
    console.log(date);
    //create a variable to reference the "date" in text box
    var filteredDate = data.filter(d => d.datetime === date)
    // loop throught filtered data and append to table 
    filteredDate.forEach(function(encounterData) {
        console.log(encounterData);
        var row = tbody.append("tr");
 
        Object.entries(encounterData).forEach(([key, value]) => {
        console.log(key, value);
        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
      });
    });
 }

// loop through data and append 
data.forEach(function(encounterData) {
    console.log(encounterData);
    var row = tbody.append("tr");

    
    Object.entries(encounterData).forEach(([key, value]) => {
    console.log(key, value);
    // Append a cell to the row for each value
    var cell = row.append("td");
    cell.text(value);
  });
});

var button = d3.select("#filter-btn");

var form = d3.select("#form");

button.on("click", filter_date);
form.on("submit", filter_date);
