const tasksControl = new TasksController();

//When user clicks on 'Save Item', calls API to add items to the database
//Add an 'onsubmit' event listener for productform to add a product
newItemForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();
    // Select the inputs
    const newToDoInput = document.querySelector('#newToDoInput');
    const newToDoDescription = document.querySelector('#newToDoDescription');
    const newToDoDate = document.querySelector('#newToDoDate');


    // Get the values of the inputs - variable names to be same as MySQL columns
    const name = newToDoInput.value;
    const description = newToDoDescription.value;
    const date = newToDoDate.value;

    // Clear the form
    newToDoInput.value = '';
    newToDoDescription.value = '';
    newToDoDate.value = '';

    // Add the task to the task manager
    tasksControl.addTask(name, description, date);

});
