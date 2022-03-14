
const createHTMLList = (index, name, description, date) =>
`
<div class="col-lg-4">
<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${description}</p>
        <p class ="card-date">${date}</p>
    </div>
</div>
</div>
`;

/* function displayProductDetails(item)
{
    document.querySelector("#modalName").innerText = item.name;
    document.querySelector("#modalImg").src = item.imageUrl;
    document.querySelector("#modalStyle").innerText = item.style;
    document.querySelector("#modalPrice").innerText = item.price;

}
*/

class TasksController
{
    constructor()
    {
        this._tasks = [];       //create an array to store the details of product items
    }

    //method to add the items into the array
    addTask(name, description, date)
    {
        //fetch POST HTTP method to send the data to the backend via the API
        var taskController = this;
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('date', date);

       fetch('http://localhost:8080/task/add', {
             method: 'POST',
             body: formData
             })
             .then(function(response) {
                 console.log(response.status); // Will show you the status
                 if (response.ok) {
                     alert("Successfully Added!")
                 }
             })
             .catch((error) => {
                 console.error('Error:', error);
                 alert("Error!")
             });
    }

    displayTask()
    {
        //fetch GET HTTP method (default) the items from the database using the API
         var taskController = this;
         taskController._tasks = [];

         //fetch data from database using the REST API endpoint from Spring Boot
        fetch('http://localhost:8080/task/all')
            .then((resp) => resp.json())
            .then(function(data) {
                console.log("2. receive data")
                console.log(data);
                data.forEach(function (task, index) {
                    const taskObj = {
                        id: task.id,
                        name: task.name,
                        description: task.description,
                        date: task.date,
                   };
                    taskController._tasks.push(taskObj);
              });

              taskController.renderTaskPage();

            })
            .catch(function(error) {
                console.log(error);
            });
    }

    renderTaskPage()
    {
        var taskHTMLList = [];

        for (var i=0; i<this._tasks.length; i++)
        {
            const task = this._tasks[i];            //assign the individual item to the variable

            const taskHTML = createHTMLList(i, task.name, task.description, task.date);
            taskHTMLList.push(taskHTML);
        }

        //Join all the elements/items in my productHTMLList array into one string, and seperate by a break
        const pHTML = taskHTMLList.join('\n');
        document.querySelector('#row').innerHTML = pHTML;


        /*addEventListener - click
        for (var i=0; i<this._tasks.length; i++)
        {
            const task = this._tasks[i];
            document.getElementById(i).addEventListener("click", function() { displayProductDetails(item);} );
        } */

    }


}   //End of ProductsController class
