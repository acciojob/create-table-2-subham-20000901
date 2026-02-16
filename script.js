function createTable() {
    //Write your code here
  let rn = prompt("Input number of rows");	
  let cn = prompt("Input number of columns");
	
  let row = Number(rn);
  let column = Number(cn);

	  //  Non-numeric input
    if (isNaN(row) || isNaN(column)) {
        alert("Please enter numeric values only.");
        return; // Function stop ho jayega
    }

    // Negative values or zero
    if (row <= 0 || column <= 0) {
        alert("Number of rows and columns must be greater than 0.");
        return; 
    }

	let myTable = document.getElementById("myTable");
	
    for(let i=0; i<row; i++){
		let newRow = myTable.insertRow();
		for(let j=0; j<column; j++){
			let newCell = newRow.insertCell();

			newCell.innerHTML = `Row-${i} Column-${j}`;
		}
	}
}
