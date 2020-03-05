function addNumbers(number1, number2 = 0){
    return number1 + number2;
}
const total = addNumbers(22323);
console.log(total);

function add(num1, num2) {
    if (num2 == undefined){
        num2 = 0;
    }
    return num1 + num2;
}
const totals = add(22323);
console.log(totals);