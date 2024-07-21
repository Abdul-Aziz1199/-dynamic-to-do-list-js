        document.addEventListener('DOMContentLoad', function(){

          
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
           removeButton.classList.add('remove-btn');
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
              if(event.key === 'enter'){
                addTask();
              }
          })
          
       };

        })
        document.addEventListener('DOMContentLoaded',addTask);

       
           
        
   
    

