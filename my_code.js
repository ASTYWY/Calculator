let first_number;
let symbol;
let second_number;
let result = 0;
let text = document.getElementById('header');


function calc(){

    first_number = document.getElementById('first_number').value
symbol = document.getElementById('symbol').value
second_number = document.getElementById('second_number').value

if(symbol === '+'){
    result = Number.parseInt(first_number) + Number.parseInt(second_number);
}
if(symbol === '-'){
    result = Number.parseInt(first_number) - Number.parseInt(second_number);
}
if(symbol === '/'){
    result = Number.parseInt(first_number) / Number.parseInt(second_number);
}
if(symbol === '*'){
    result = Number.parseInt(first_number) * Number.parseInt(second_number);
}
text.textContent = result;
}
    