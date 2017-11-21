"use strict"


function tableCol (){
    

    for (var iRow = 0 ; iRow < 4 ; iRow++) {

            var newRow = document.createElement('tr');
          
               for (var iCol = 0; iCol < 3; iCol++) {
                 newRow.innerHTML += '<td>Привет, мир!</td>';
                }
         


       table.insertBefore(newRow, table.children[1]);
        }


    
}

