
document.querySelector("#btns").addEventListener("click",function(event){
    var display=document.querySelector("#display");
    
    var valorBtn=(event.target.value!=undefined)?event.target.value:"";
   
   
    
    switch(valorBtn){
        case 'CE': display.innerHTML="";
            break;  
        case 'DEL':
            
            break;
        default: display.innerHTML+=valorBtn; 
    }
});