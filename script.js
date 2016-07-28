

           
document.getElementById('newTask').onkeypress = function(e)
  {
    if (!e) e = window.event;
       var keyCode = e.keyCode || e.which;
        if (keyCode == '13')
        {
           
            var table = document.getElementById("myTable");
            var row   = table.insertRow(document.getElementById("myTable").rows.length);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            
          
          var checkbox = document.createElement('input'); 
            checkbox.type = 'checkbox';
            checkbox.id = "checkbox";
            checkbox.onclick =(function()
                                 {
                                  var targetElem = this.parentNode.parentNode.cells[1].innerHTML;
                                  cell2.innerHTML = '<del>' + targetElem + '</del>';
                                 }
                                 );
            cell1.appendChild(checkbox);
            
           cell2.innerHTML = document.getElementById("newTask").value;
            cell2.style.width = "400px";
            cell2.style.textAlign = "center";
            
          var deleteButton = document.createElement('input'); 
            deleteButton.type = 'button';
            deleteButton.id = "deleteButton";
            deleteButton.value = "delete";
            deleteButton.onclick =(function()
                                  {
                                    var i = this.parentNode.parentNode.rowIndex;
                                     document.getElementById("myTable").deleteRow(i);
                                   }
                                 );
            cell3.appendChild(deleteButton);
            cell3.style.width = "800px";
            cell3.style.textAlign = "center";
            document.getElementById('newTask').value = '';
            
       }
    }
  
  