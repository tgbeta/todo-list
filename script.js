const tasks = ['Task 1', 'Task 2', 'Task 3', 'Task 4'];

//Get items list by id
const itemsList = document.getElementById("items");

//Create a function addTaskToList to append task to the list
function addTaskToList(task){
  const taskItem = document.createElement("li");
  taskItem.innerHTML = `<span class="task-text">${task}</span>
              <input type="text" class="task-input">
              <i class="uil uil-edit icon icon-edit"></i>
              <i class="uil uil-trash-alt icon icon-delete"></i>`
  taskItem.classList.add("list-group-item");
  itemsList.appendChild(taskItem);
}

// Load tasks using loop and calling function addTaskToList
for(let i = 0; i < tasks.length; i++){
  addTaskToList(tasks[i]);
}


//Get submit button by id
let submitBtn = document.querySelector("#submit");

// Add event listener on submit button to add new tasks by clicking it
submitBtn.addEventListener("click", function(event){
  event.preventDefault();
  let input = document.getElementById("new-text-input");
  let inputText = input.value;
  addTaskToList(inputText);
  input.value = "";
})

/*
- Add event listener to task list
- Check if icon delete or icon edit was clicked
- If icon delete clicked, remove parent element
- If icon edit clicked, hide span, show input and add span text to input
- For edit icon, add event listener to press enter key, to update and show span text and hide input
*/

itemsList.addEventListener("click", function(e){
  // console.log(e.target);
  if(e.target.classList.contains("icon-delete")){
    // console.log(e.target.parentElement)
    e.target.parentElement.remove();
  } else if(e.target.classList.contains("icon-edit")){
    const input = e.target.previousElementSibling;
    const span = input.previousElementSibling;
    span.style.display = "none";
    input.style.display = "block";
    input.value = span.innerHTML;
    input.addEventListener("keypress", function(e){
      if(e.keyCode === 13){
        input.style.display = "none";
        span.innerHTML = input.value;
        span.style.display = "block";
        
      }
    })
  }
})


