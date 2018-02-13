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
    
    
    var trSel = document.getElementsByTagName('tr');
    var td_Sel = trSel[0].getElementsByClassName('selected');
    var lenSel = td_Sel.length - 1;
    
    for (let a = 0; a < document.getElementsByTagName('tr').length ; a++){ 
        
        if (!trSel[a].getElementsByClassName('selected')[0]) {
             }
        else { 
            for (var i = 1, ii = 1, sLen = trSel[a].getElementsByClassName('selected').length;  i < sLen ; i++, ii++){
            console.log ('внутренний', trSel[a].getElementsByClassName('selected')[0], sLen);
                trSel[a].getElementsByClassName('selected')[1].remove();
                
            }
            trSel[a].getElementsByClassName('selected')[0].setAttribute('colspan', sLen);
            trSel[a].getElementsByClassName('selected')[0].style.background = "#b7b3ed";
        };
        
        console.log ('внешний' )
        
        
        
        

        
        
    }
    

    
    
    
    console.log(trSel, td_Sel.length);
    
}
    



