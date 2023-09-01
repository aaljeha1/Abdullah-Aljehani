//Global variables
var prevCalc = 0;
var calc = "";

document.getElementById("btn1").onclick = function()
{
    showNum(1);
}
document.getElementById("btn2").onclick = function()
{
    showNum(2);
}
document.getElementById("btn3").onclick = function()
{
    showNum(3);
}
document.getElementById("btn4").onclick = function()
{
    showNum(4);
}
document.getElementById("btn5").onclick = function()
{
    showNum(5);
}
document.getElementById("btn6").onclick = function()
{
    showNum(6);
}
document.getElementById("btn7").onclick = function()
{
    showNum(7);
}
document.getElementById("btn8").onclick = function()
{
    showNum(8);
}
document.getElementById("btn9").onclick = function()
{
    showNum(9);
}
document.getElementById("btn0").onclick = function()
{
    showNum(0);
}
document.getElementById("btnPlus").onclick = function()
{
    add();
}
document.getElementById("btnMinus").onclick = function()
{
    sub();
}
document.getElementById("btnTimes").onclick = function()
{
    multiply();
}
document.getElementById("btnPow").onclick = function()
{
    Powy();
}
document.getElementById("btnPow2").onclick = function()
{
    Pow2();
}
document.getElementById("btnDivide").onclick = function()
{
    division();
}
document.getElementById("btnDecrement").onclick = function()
{
    decrement();
}
document.getElementById("btnIncrement").onclick = function()
{
    increment();
}
document.getElementById("btnSqrt").onclick = function()
{
    squareRoot();
}
document.getElementById("btnFloor").onclick = function()
{
    Floor();
}
document.getElementById("btnRound").onclick = function()
{
    Round();
}
document.getElementById("btnDecimal").onclick = function()
{
    showNum('.');
}
document.getElementById("btnReset").onclick = function()
{
    clear();
}
document.getElementById("btnCalc").onclick = function()
{
    calculate();
}
//The following function displays a number in the textfield when a number is clicked.
//Note that it keeps concatenating numbers which are clicked. 
function showNum(value) {
    // There was error and it is corrected here
   // document.frmCalc.txtNumber.value +== value;
   document.frmCalc.txtNumber.value += value;
}


function Pow2() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num = num * num;
           // document.frmCalc.txtnumber.value = num;
           /// prevCalc = num;
            document.frmCalc.txtNumber.value = num;
           
        }
}
//The following function decreases the value of displayed number by 1.
//isNaN method checks whether the value passed to the method is a number or not.     
function decrement() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num--;
           // document.frmCalc.txtnumber.value = num;
           /// prevCalc = num;
            document.frmCalc.txtNumber.value = num;
           
        }
}
function increment() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num++;
           // document.frmCalc.txtnumber.value = num;
           /// prevCalc = num;
            document.frmCalc.txtNumber.value = num;
           
        }
}
function squareRoot() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num = Math.sqrt(num);
           // document.frmCalc.txtnumber.value = num;
           /// prevCalc = num;
            document.frmCalc.txtNumber.value = num;
           
        }
}
function Floor() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num = Math.floor(num);
           // document.frmCalc.txtnumber.value = num;
           /// prevCalc = num;
            document.frmCalc.txtNumber.value = num;
           
        }
}
function Round() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num = Math.round(num);
           // document.frmCalc.txtnumber.value = num;
           /// prevCalc = num;
            document.frmCalc.txtNumber.value = num;
           
        }
}

//The following function is called when "Add" button is clicked. 
//Note that it also changes the values of the global variables.       
function add() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Add";
        }
}

//The following function is called when "Subtract" button is clicked. 
//Note that it also changes the values of the global variables.       
function sub() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
           calc = "Subtract";
        }
}
//The following function is called when "Multiply" button is clicked. 
//Note that it also changes the values of the global variables.       
function multiply() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
           calc = "Multiply";
        }
}
//The following function is called when "Division" button is clicked. 
//Note that it also changes the values of the global variables.       
function division() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
           calc = "Division";
        }
}

//The following function is called when "Pwer y" button is clicked. 
//Note that it also changes the values of the global variables.       
function Powy() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "PowY";
        }
}
//The following function is called when "Calculate" button is clicked.
//Note that this function is dependent on the value of global variable.        
function calculate() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            if (calc == "Add"){
                //There was error
                var total = prevCalc + num;
                document.frmCalc.txtNumber.value = total;
            }
            if (calc == "Subtract"){
                var total = prevCalc - num;
                document.frmCalc.txtNumber.value = total;
            }
            if (calc == "Multiply"){
                var total = prevCalc * num;
                document.frmCalc.txtNumber.value = total;
            }
            if (calc == "Division"){
                if(num == 0)
                {
                    document.frmCalc.txtNumber.value = "Error";
                }
                var total = prevCalc / num;
                document.frmCalc.txtNumber.value = total;
            }
            if (calc == "PowY"){
                var total = prevCalc * num;
                document.frmCalc.txtNumber.value = total;
            }
        
}}

function clear() {
	document.frmCalc.txtNumber.value = "";
	prevCalc = 0;
	calc = "";
}