//-------iskvieciame duomenu ivedimo forma
function display() {
    let x = document.getElementById("dataform");
    x.style.display = "block";
}

//-------duomenu nuskaitymas

const button = document.querySelector('#confirm');

button.addEventListener('click', read)

function read() {
        let formData = {};
            formData["Task"] = document.getElementById("TaskInput").value;
            formData["duedate"] = document.getElementById("duedate").value;
            formData["inputPriority"] = document.getElementById("inputPriority").value;
            formData["inputprogres"] = document.getElementById("inputprogres").value;
            return formData;


        }
//------duomenu irasymas i table
function write(data) {
    let table = document.getElementById("TasksList").getElementsByTagName('tbody')[0];
        let newRow = table.insertRow(table.length);
        cell1 = newRow.insertCell(0);
        cell1.innerHTML ="<i class=\"far fa-clock\"></i>";
        cell2 = newRow.insertCell(1);
        cell2.innerHTML = "<input type=\"checkbox\"> ";
        cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.Task;
        cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.inputPriority;
        cell5 = newRow.insertCell(4);
        cell5.innerHTML = data.duedate;
        cell6 = newRow.insertCell(5);
        cell6.innerHTML = data.inputprogres;
        cell7 = newRow.insertCell(6);
        cell7.innerHTML = '<a onClick="onDelete(this)">Delete</a>';

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
