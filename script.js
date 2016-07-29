

var taskArray = new Array();           

document.getElementById('newTask').onkeypress = function(e)
  {
    // detect the Enter key Press as Enter key code is "13"
    if (!e) e = window.event;
       var keyCode = e.keyCode || e.which;
        if (keyCode == '13')
        {
            // created an object to store an ID and name of the task
            var taskObj = new Object();
            taskObj.ID = document.getElementById("myTable").rows.length;
            taskObj.task = document.getElementById("newTask").value

            // store the task objects in the arrays
            taskArray.push(taskObj);

           // initialise the table and its cells
            var table = document.getElementById("myTable");
            var row   = table.insertRow(document.getElementById("myTable").rows.length);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            
          
           // cell[0] is having check box
            var checkbox = document.createElement('input'); 
            checkbox.type = 'checkbox';
            checkbox.id = "checkbox";
            checkbox.onclick =(function()
                                 {
                                  if (checkbox.checked == true) 
                                      {
                                      var rowIndice = this.parentNode.parentNode.rowIndex;
                                      var targetElem = taskArray[rowIndice].task;
                                      cell2.innerHTML = '<del>' + targetElem + '</del>';
                                      }
                                  else
                                      {
                                      var rowIndice = this.parentNode.parentNode.rowIndex;
                                      var targetElem = taskArray[rowIndice].task;
                                      cell2.innerHTML = targetElem;
                                      } 
                                 }
                                 );
            cell1.appendChild(checkbox);
            displayTasks();
            

            // cell[2] has the delete button
           var deleteButton = document.createElement('input'); 
            deleteButton.type = 'button';
            deleteButton.id = "deleteButton";
            deleteButton.value = "delete";
            deleteButton.onclick =(function()
                                  {
                                     var rowInd = this.parentNode.parentNode.rowIndex;
                                     taskArray.splice(rowInd,1);
                                     displayTasks();
                                     table.deleteRow(table.rows.length - 1);
                                   }
                                 );
            cell3.appendChild(deleteButton);
            cell3.style.width = "800px";
            cell3.style.textAlign = "center";

            // clear the add task text box after saving a task
            document.getElementById('newTask').value = '';
            
       }

       function displayTasks()
       {
        // cell[1] has the task name
            for (var i = 0, row; row = table.rows[i], i < taskArray.length; i++)
            {
              row.cells[1].innerHTML = taskArray[i].task;
              row.cells[1].style.width = "400px";
              row.cells[1].style.textAlign = "center";

            }
       }
    }
  
  