"use strict"

function deleteTableColRow (){ 
    
    var element = document.getElementById("table");
    
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function createTableColRow (){
    
    deleteTableColRow ();
    
    var c = document.getElementById('col').value,
        r = document.getElementById('row').value;
    
    var t = document.getElementById("table");

    for (var iRow = 0 ; iRow < r && r <101 ; iRow++) {

            var newRow = document.createElement('tr');
          
               for (var iCol = 0; iCol < c  && c <101 ; iCol++) {
                 newRow.innerHTML += '<td>' + iCol +'</td>';
                }
        
    table.insertBefore(newRow, t.children[0]);
        }
    
    var el = document.getElementsByTagName('td');
    
    
    
    function addClassSelectedCols (e) {
        e.currentTarget.classList.add("selected");
    }
    
    for(var i = 0; i < el.length; i++){
      el[i].addEventListener('click', addClassSelectedCols, false);
    }

}


function combineSelectedCols() {
    
    var rows = document.getElementsByTagName('tr');
    
    var selectedCols = document.getElementsByTagName('tr')[0].getElementsByTagName('td')[0].className;
    
    console.log (rows, selectedCols);
}


