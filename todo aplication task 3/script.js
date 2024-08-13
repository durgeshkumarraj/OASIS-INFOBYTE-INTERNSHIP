document.getElementById('todo-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the title and description values
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    // Create a new to-do item
    const todoItem = document.createElement('li');

    // Create title element
    const todoTitle = document.createElement('div');
    todoTitle.className = 'title';
    todoTitle.textContent = title;

    // Create description element
    const todoDescription = document.createElement('div');
    todoDescription.className = 'description';
    todoDescription.textContent = description;

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-btn';
    deleteButton.textContent = 'X';

    // Append elements to the todo item
    todoItem.appendChild(todoTitle);
    todoItem.appendChild(todoDescription);
    todoItem.appendChild(deleteButton);

    // Append the todo item to the list
    document.getElementById('todo-list').appendChild(todoItem);

    // Clear the form inputs
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';

    // Add delete functionality
    deleteButton.addEventListener('click', function() {
        todoItem.remove();
    });
});
