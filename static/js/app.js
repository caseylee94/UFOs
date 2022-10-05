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