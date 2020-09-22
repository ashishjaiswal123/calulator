

var buttons = document.getElementsByClassName("button");
var displays = document.getElementById("display");

var operand1 = 0;
var operand2 = null;
var operator = null;

for( var i =0; i<buttons.length; i++){
	buttons[i].addEventListener('click',function(){
       var value = this.getAttribute('data-value');
       if(value=='+'){ // whether an operator is clicked here
       	  
           operator = '+';
           operand1 = parseFloat(displays.textContent);
           displays.textContent = null;
       }
       else if(value=='-'){
           operator = '-';
           operand1 = parseFloat(displays.textContent);
           displays.textContent = null;
       }
       else if (value=='*'){
       	   operator = '*';
           operand1 = parseFloat(displays.textContent);
           displays.textContent = null;
       }
       else if (value=='/'){
       	   operator = '/';
           operand1 = parseFloat(displays.textContent);
           displays.textContent = null;
       }
       else if (value=='%'){
       	   operator = '%';
           operand1 = parseFloat(displays.textContent);
           displays.textContent = '0.' + displays.textContent ;
       }
       else if (value=='+/-'){
       	   displays.innerText = '-'+displays.innerText;
       }
       else if (value=='AC'){
       	    operand1 = 0;
            operand2 = null;
            operator = null;
            displays.textContent = null;
       }
       else if (value=='=') {
           operand2 = parseFloat(displays.textContent);
           var result = eval(operand1 + operator + operand2);
           if (result=='Infinity'){
            	displays.innerText = 'Error';
           }else{
               displays.innerText = result;
           }
       }
       else{
       	displays.innerText += value;
       }


	})
}