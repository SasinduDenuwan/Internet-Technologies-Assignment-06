function getValue(value){
    document.getElementById('result').value += value;
}

function clearValue(){
    document.getElementById('result').value= '';
}

function calculateValue(){
    try{      
        let displayValue = eval(document.getElementById('result').value);
        document.getElementById('result').value = displayValue;

    } catch (error){
        document.getElementById('result').value = "Error";
        console.log(error);
    }
}