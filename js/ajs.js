function display() {
    let x = document.getElementById("forma");
        x.style.display = "block";


}

const button = document.querySelector('#patvirtinti');
const addTask = document.querySelector('#subject');
const tasks = document.querySelector('table');


button.addEventListener('click', irasyti)

function irasyti() {
    const task = document.createElement('td');
    task.textContent=addTask.value;
    tasks.appendChild(task);
    

}

function displayNone() {
    let y = document.getElementById("forma");
    y.style.display = "none";


}