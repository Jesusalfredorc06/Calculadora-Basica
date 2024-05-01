function obtener(){
    
    let num1 = parseInt(document.getElementById("numero1").value);

    let num2 = parseInt(document.getElementById("numero2").value);

    let operacion = document.getElementById("operador").value;

    switch(operacion){
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;   
    }

    document.getElementById("resultado").value = result
}


