//-------iskvieciame duomenu ivedimo forma
function display() {
    let x = document.getElementById("dataform");
    x.style.display = "block";
}

//------nuskaitau, irasau i lentele

const button = document.querySelector('#confirm');
button.addEventListener('click', read);
let duomenuMasyvas = [];
function read() {
    duomenuMasyvas.push(document.getElementById("TaskInput").value);
    duomenuMasyvas.push(document.getElementById("duedate").value);
    duomenuMasyvas.push(document.getElementById("inputPriority").value);
    duomenuMasyvas.push(document.getElementById("inputProgres").value);
    //console.log(duomenuMasyvas);

        }





