function createTable() {
    //Write your code here
  let rn = prompt("Input number of rows");
  let cn = prompt("Input number of columns");

	let myTable = document.getElementById("myTable");
	let row = Number(rn);
	let column = Number(cn);
    for(let i=0; i<row; i++){
		let newRow = myTable.insertRow();
		for(let j=0; j<column; j++){
			let newCell = newRow.insertCell();

			newCell.innerHTML = `Row-${i+1} Column-${j+1}`;
		}
	}
}
