const display1=document.querySelector("#display1");
const display2=document.querySelector("#display2");

document.querySelector("#grid").addEventListener("click",function(event){

    if(event.target.tagName=="BUTTON" || event.target.tagName=="I"){
        var valorBtn=(event.target.tagName=="BUTTON")?event.target.value:"DEL";
       
        switch(valorBtn){
            case 'CE': 
                display2.innerHTML="";display1.innerHTML="";
                break;  
            case 'C':
                 display1.innerHTML="";
            break;  
            case 'DEL':
               display1.innerHTML=display1.innerHTML.replace(display1.innerHTML[display1.innerHTML.length-1],"");
            break;
            case '=':
                display2.innerHTML=display1.innerHTML; 
                display1.innerHTML="";
                break;
             case ".":
                if(display1.innerHTML.includes(".")) break;   
            default: display1.innerHTML+=valorBtn; 
    }
    }
});