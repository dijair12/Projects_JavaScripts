// Forma 1

function somar1(num1, num2) {
    return num1 + num2;
}

console.log(somar1(2, 3));

// Forma 2

let somar2 = function(num1, num2){
    return num1 + num2;
}

console.log(somar2(2, 3));

// Forma 3

let somar3 = somar1;

console.log(somar2(6, 3));

//Arrow function

let somar4 = (num1, num2) => {
    return num1 + num2;
}

console.log(somar4(4, 6));

/* Atenção
Caso a sua função tenha apnas 1 paramentro de entrada  e executa apenas uma linha 
você pode simplicar ainda mais usando Arrow function
*/

let dobrar = valor => valor * 2;

console.log(dobrar(5));

function mensagem1() {
    console.log('Evolua seu lado geek');
}

mensagem1()

const msg = () => console.log('Evolua seu lado geek');

msg();