//addds number using respective function + input parameters
function num(num) 
{
    document.getElementById("input").value +=num;
}

//signs are added to the equation/ input
function add()
{
    document.getElementById("input").value +="+";
}
function subtract()
{
    document.getElementById("input").value +="-";
}
function divide()
{
    document.getElementById("input").value +="/";
}
function multiply()
{
    document.getElementById("input").value +="*";
}
//input clear
function deleteInput()
{
    document.getElementById("input").value = "";
}

//input solve
function equal()
{
    document.getElementById("input").value = eval(document.getElementById("input").value)
}