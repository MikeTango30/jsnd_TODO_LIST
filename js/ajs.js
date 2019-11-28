//-------iskvieciame duomenu ivedimo forma
function display() {
    let x = document.getElementById("dataform");
    x.style.display = "block";
}

//----mano kintamieji

//1-mygtukas

const button = document.querySelector('#confirm');
button.addEventListener('click', readWrite);

//---2 - pirmas col su icon
let stulpelis1 = document.querySelector('#ForIcon');
const ikona = "<i class=\"material-icons\"></i>";


//-------duomenu nuskaitymo, irasymo funkcija

function readWrite() {
    let vieta = document.getElementById("TasksList").getElementsByTagName('tbody');

    stulpelis1.innerHTML = ikona;
}


//-------forma paslepiama supildzius duomenis
function displayNone() {
    let y = document.getElementById("dataform");
    y.style.display = "none";
}

    // function onDelete(td) {
    //     if (confirm('Are you sure to delete this record ?')) {
    //         row = td.parentElement.parentElement;
    //         document.getElementById("employeeList").deleteRow(row.rowIndex);
    //         resetForm();
    //     }
    // }
