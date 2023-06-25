const display1=document.querySelector("#display1");
const display2=document.querySelector("#display2");
const btns=document.querySelectorAll(".btn");

const calc={
    num1:"",
    num2:"",
    operation:"",
    soma: function(){
        if(this.num1 && this.num2) return (Number.parseFloat(this.num1)+Number.parseFloat(this.num2));
        if(this.num1) return (Number.parseFloat(this.num1));
        if(this.num2) return (Number.parseFloat(this.num2));
        return "ERRO MATH";
    },
    sub: function(){
        if(this.num1 && this.num2) return (Number.parseFloat(this.num2)-Number.parseFloat(this.num1));
        if(this.num1) return (Number.parseFloat(this.num1));
        if(this.num2) return (Number.parseFloat(this.num2));
        return "ERRO MATH";
    },
    mult: function(){
        if(this.num1 && this.num2) return (Number.parseFloat(this.num2)*Number.parseFloat(this.num1));
        if(this.num1) return (Number.parseFloat(this.num1));
        if(this.num2) return (Number.parseFloat(this.num2));
        return "ERRO MATH";
    },
    div: function(){
        if(this.num1 && this.num2) return (Number.parseFloat(this.num2)/Number.parseFloat(this.num1));
        if(this.num1) return (Number.parseFloat(this.num1));
        if(this.num2) return (Number.parseFloat(this.num2));
        return "ERRO MATH";
    },
    calculation: function(){
      
        if(this.operation=="+") return calc.soma();
        if(this.operation=="-") return calc.sub();
        if(this.operation=="x") return calc.mult();
        if(this.operation=="/") return calc.div();
    }
};

for(btn of btns){
    btn.addEventListener("click",function(e){
        var button=((e.target.tagName)=="I")?"DEL":e.target.value;
      
        if(!Number.isNaN(+button)|| button=="."){// é número
            if((!(display1.innerHTML.includes(".") && button==".")) &&(display1.innerHTML.length<28)) display1.innerHTML+=button;
        } 
        else {//não é número
           switch(button) {
            case "CE":
                display1.innerHTML="";
                display2.innerHTML="";
            break;
            
            case "C":
                display1.innerHTML="";
            break;
            
            case "DEL":
                
                display1.innerHTML=display1.innerHTML.substring(0,display1.innerHTML.length-1);
            break;
            
            case "=":
                   if(calc.operation){
                        calc.num1=display1.innerHTML;
                        calc.num2=display2.innerHTML;
                        display2.innerHTML=calc.calculation();
                        display1.innerHTML="";
                        calc.operation="";
                    break;
                   }else{
                    display2.innerHTML=display1.innerHTML?display1.innerHTML:display2.innerHTML;
                    display1.innerHTML="";
                    } 
                   
            break;    
            
            case "+":
                calc.num1=display1.innerHTML;
                calc.num2=display2.innerHTML;
                calc.operation="+";
                display2.innerHTML=calc.soma()+calc.operation;
                display1.innerHTML="";
            break;
            case "-":
                calc.num1=display1.innerHTML;
                calc.num2=display2.innerHTML;
                calc.operation="-";
                display2.innerHTML=calc.sub()+calc.operation;
                display1.innerHTML="";
            break; 
            case "x":
                calc.num1=display1.innerHTML;
                calc.num2=display2.innerHTML;
                calc.operation="x";
                display2.innerHTML=calc.mult()+calc.operation;
                display1.innerHTML="";
            break;  
            case "/":
                calc.num1=display1.innerHTML;
                calc.num2=display2.innerHTML;
                calc.operation="/";
                display2.innerHTML=calc.div()+calc.operation;
                display1.innerHTML="";
            break;     
            }

        }
    });
}