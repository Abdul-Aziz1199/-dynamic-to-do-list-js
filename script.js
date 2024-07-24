        document.addEventListener('DOMContentLoad', function(){

            //local storage project start

              // Function to load tasks from local storage
              function loadTasks() {
                  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
                  tasks.forEach(task => {
                      createTaskElement(task);
                  });
              }
          
              // Function to create a task element and append it to the DOM
              function createTaskElement(task) {
                  const li = document.createElement('li');
                  li.textContent = task;
          
                  const removeButton = document.createElement('button');
                  removeButton.textContent = 'Remove';
                  removeButton.addEventListener('click', function() {
                      removeTask(task);
                      li.remove();
                  });
          
                  li.appendChild(removeButton);
                  document.getElementById('task-list').appendChild(li);
              }
          
              // Function to add a task
              function addTask(task) {
                  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
                  tasks.push(task);
                  localStorage.setItem('tasks', JSON.stringify(tasks));
                  createTaskElement(task);
              }
          
              // Function to remove a task
              function removeTask(taskToRemove) {
                  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
                  tasks = tasks.filter(task => task !== taskToRemove);
                  localStorage.setItem('tasks', JSON.stringify(tasks));
              }
          
              // Event listener for adding a task
              document.getElementById('add-task-btn').addEventListener('click', function() {
                  const taskInput = document.getElementById('task-input');
                  const task = taskInput.value.trim();
                  if (task !== '') {
                      addTask(task);
                      taskInput.value = '';
                  }
              });
          
              // Load tasks from local storage when the page loads
              loadTasks();
          

          

          //local storage end

          const addButton = document.getElementById("add-task-btn");

          const taskInput = document.getElementById("task-input");

          const taskList = document.getElementById("task-list");

          function addTask(){
              let taskText   = taskInput.value.trim();
         if(taskText !== ''){
       
          const taskItem = document.createElement('li');
            taskItem.textContent = taskText;//for entering a task
          //button for removing a task
         const removeButton = document.createElement('button');
           removeButton.textContent = "Remove";
           removeButton.classList.add('remove-btn');//to add 'remove-btn' class to js
         removeButton.className = 'remove-btn';
         //onclick to remove task when triggered
         removeButton.onclick= function(){
          taskList.removeChild(taskItem); //<ul> remove the <li> element
         };
        //append the remove button the <li> element
         taskItem.appendChild(removeButton);

         //append <li> element to the <ul>(taskList)
          taskList.appendChild(taskItem );
          taskInput.value = "";
        }else{
          alert('please enter a task');
        }

        //add eventListener to addButton to call add task when clicked
        addButton.addEventListener('click', addTask);

          //add keypress to addTask to add task when press is enter key
          taskInput.addEventListener('keypress', function(event){
              if(event.key === 'Enter'){
                addTask();
              }
          })
          
       };

        })
        document.addEventListener('DOMContentLoaded',addTask);
      

       
           
        
   
    

