"use strict"

function deleteTableColRow (){ 
    
    var element = document.getElementById("table");
    
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function createTableColRow (){
    
    deleteTableColRow ();
    
    var t = document.getElementById("table");

    for (var iRow = 0 ; iRow < 10 ; iRow++) {

            var newRow = document.createElement('tr');
          
               for (var iCol = 0; iCol < 10; iCol++) {
                 newRow.innerHTML += '<td>' + iCol +'</td>';
                }
        
    table.insertBefore(newRow, t.children[0]);
        }
    console.log(t.children[0]);
    console.log(document.querySelectorAll('tr > td')[2].parentElement);
    console.log(document.querySelectorAll('tr > td')[2].parentElement.parentElement);
    console.log(document.querySelectorAll('tr > td')[2].parentElement.parentElement.parentElement);
    console.log(document.querySelectorAll('tr > td')[2].parentElement.parentElement.parentElement.parentElement);
    console.log(document.querySelectorAll('tr > td')[2].parentElement.parentElement.parentElement.parentElement.parentElement);
    console.log(document.querySelectorAll('tr > td')[2].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement);
}







