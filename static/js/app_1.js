// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Create a function to build a table
function buildTable(data) {

    //Clear out the existing data to begin with a clean table
    tbody.html("");

    // Define the function to loop through each row of data
    // and append a row and cells for each value in row
    data.forEach((dataRow) => {

        // Append a row to the table body
        let row = tbody.append("tr");

        // Loop through each field in the data row and
        // add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });

}

// Create the function to filter by date
function handleClick() {

    // Create variables to hold filtered and unfiltered date data
    let date = d3.select("#datetime").property("value");

    // Set default filter data as original table data
    // (aka data with no filter yet)
    let filteredData = tableData;

    // If statement to check if data is filtered
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    // Pass the filtered data through the build table function
   // to create table based on date. *Note: If not date is selected 
   // table will just be original data 
    buildTable(filteredData);
}

// Attach event to listen for the button click
d3.selectAll("#filter-btn").on("click", handleClick);

//Build the original table when the page loads
buildTable(tableData);
