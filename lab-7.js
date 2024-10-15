// Event listener for form submission
document.getElementById('task-form').addEventListener('submit', (e) => {
    e.preventDefault();
  
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
  
    if (taskText) {
      addTask(taskText);
      taskInput.value = ''; // Clear input field after adding task
    }
  });
  
  // Function to add a new task to the list
  const addTask = (taskText) => {
    // Create elements
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const taskLabel = document.createElement('span');
    const deleteBtn = document.createElement('button');
  
    // Set checkbox attributes
    checkbox.type = 'checkbox';
    checkbox.classList.add('task-checkbox');
    checkbox.addEventListener('change', handleTaskCompletion);
  
    // Set delete button attributes
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', deleteTask);
  
    // Add task text to the label
    taskLabel.textContent = taskText;
  
    // Append elements to list item (li)
    li.appendChild(checkbox);
    li.appendChild(taskLabel);
    li.appendChild(deleteBtn);
  
    // Append list item to task list
    document.getElementById('task-list').appendChild(li);
  };
  
  // Function to handle task completion (checkbox change event)
  const handleTaskCompletion = (e) => {
    const listItem = e.target.parentElement;
  
    if (e.target.checked) {
      listItem.classList.add('completed');
    } else {
      listItem.classList.remove('completed');
    }
  };
  
  // Function to delete a task
  const deleteTask = (e) => {
    const listItem = e.target.parentElement;
    document.getElementById('task-list').removeChild(listItem);
  };
  