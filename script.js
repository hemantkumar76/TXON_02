let expression = "";
let result = "";

function addToExpression(char) {
    expression += char;
    document.getElementById("expression").value = expression;
}

function calculate() {
    try {
        result = eval(expression);
        document.getElementById("result").value = result;
    } catch (e) {
        document.getElementById("result").value = "Error";
    }
}

function clearScreen() {
    expression = "";
    result = "";
    document.getElementById("expression").value = "";
    document.getElementById("result").value = "";
}

//addd karega listeners ko button me 
document.getElementById("clear").addEventListener("click", clearScreen);
document.getElementById("open-parenthesis").addEventListener("click", function () {
    addToExpression("(");
});
document.getElementById("close-parenthesis").addEventListener("click", function () {
    addToExpression(")");
});
document.getElementById("divide").addEventListener("click", function () {
    addToExpression("/");
});
document.getElementById("multiply").addEventListener("click", function () {
    addToExpression("*");
});
document.getElementById("subtract").addEventListener("click", function () {
    addToExpression("-");
});
document.getElementById("add").addEventListener("click", function () {
    addToExpression("+");
});
document.getElementById("equals").addEventListener("click", calculate);
document.getElementById("zero").addEventListener("click", function () {
    addToExpression("0");
});
document.getElementById("one").addEventListener("click", function () {
    addToExpression("1");
});
document.getElementById("two").addEventListener("click", function () {
    addToExpression("2");
});
document.getElementById("three").addEventListener("click", function () {
    addToExpression("3");
});
document.getElementById("four").addEventListener("click", function () {
    addToExpression("4");
});
document.getElementById("five").addEventListener("click", function () {
    addToExpression("5");
});
document.getElementById("six").addEventListener("click", function () {
    addToExpression("6");
});
document.getElementById("seven").addEventListener("click", function () {
    addToExpression("7");
});
document.getElementById("eight").addEventListener("click", function () {
    addToExpression("8");
});
document.getElementById("nine").addEventListener("click", function () {
    addToExpression("9");
});
document.getElementById("decimal").addEventListener("click", function () {
    addToExpression(".");
});
