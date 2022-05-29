const form = document.querySelector('form')
const taskList = document.querySelector('.taskList')
const listContainer = document.querySelector('.tasks')
const h3Tag = document.querySelector('h3');
const tasks = JSON.parse(localStorage.getItem('task')) || []; // this assigns data in local storage to our task array if it is there or assigns an empty array
if(tasks.length >0){
for(let i =0 ; i<tasks.length ; i++){
    const liTag = document.createElement('li');
    liTag.textContent = tasks[i];
    taskList.appendChild(liTag);
}
}
//the below piece of code is to remove elements that are added from the local storage
const listElements = document.querySelectorAll('li')
listElements.forEach(element => {
element.addEventListener('click', ()=>{
taskList.removeChild(element)  //this removes task from display
const index = tasks.indexOf(element.textContent)
tasks.splice(index ,1); // this removes task from task array
numberOfTasks = tasks.length;
h3Tag.textContent = `No. of Tasks = ${numberOfTasks}`
let temp = JSON.stringify(tasks);
localStorage.setItem('task', temp);
})                
});
let numberOfTasks = tasks.length
// this below piece of code is executed once user hits submit
if(tasks.length >0){h3Tag.textContent = `No. of Tasks = ${numberOfTasks}`}
function addtask(e){
    e.preventDefault();
    const task = e.target.Task.value;
    if(task === ''){return}
    storeTask(task)
    displayTask(tasks)
    storeLocally(tasks)
    e.target.reset()
    console.log(task)
    console.log(tasks);
    numberOfTasks = tasks.length
    h3Tag.textContent = `No. of Tasks = ${numberOfTasks}`
}
function storeTask(task){
    tasks.push(task);
}


function displayTask(tasks){
    const liTag = document.createElement('li');
    if(tasks.length>=1){
    liTag.textContent = tasks[tasks.length-1];
    taskList.appendChild(liTag);
    }

    //===============Removing an Element===========//
    liTag.addEventListener('click', ()=>{
        taskList.removeChild(liTag)  //this removes task from display
        const index = tasks.indexOf(liTag.textContent)
        tasks.splice(index ,1); // this removes task from task array
        numberOfTasks = tasks.length;
        h3Tag.textContent = `No. of Tasks = ${numberOfTasks}`
        let temp = JSON.stringify(tasks);
        localStorage.setItem('task', temp);
    })
}

function storeLocally(tasks){
    let temp = JSON.stringify(tasks);
    localStorage.setItem('task', temp);
}
