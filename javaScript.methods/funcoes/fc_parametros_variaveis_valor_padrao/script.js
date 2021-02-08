function somar1() {
    let soma = 0;
    for(let i = 0; i < arguments.length; i++){
        soma += arguments[i];
    }
    return soma;
}

/* console.log(somar1());// 0
console.log(somar1(2));// 2
console.log(somar1(2, 5)); // 7
console.log(somar1(5, 3, 9)); // 17
console.log(somar1(2, 4, 5, 12));// 23 */

function imprime_valores(num1, num2) {
    for(let i in arguments){
        console.log(arguments[i]);
    }
}

/* imprime_valores();
imprime_valores(6, 4);
imprime_valores(4, 7, 8);
imprime_valores(5, 7, 56, 8); */

//Gambiarra 1 
function somar2(num1, num2, num3) {
    num1 = num1 || 1;
    num2 = num2 || 2;
    num3 = num3 || 3;

    return num1 + num2 + num3;
}

/* console.log(somar2(4, 5, 6));
console.log(somar2());
console.log(somar2(2));
console.log(somar2(2, 2, 2));
console.log(somar2(2, 2, 2, 2)); */

//console.log(somar2(0, 0, 0)); era pra ser zero, mas em js 0 é false então é 6

//Gambiarra 2

function somar3(num1, num2, num3) {
    num1 = isNaN(num1) ? 1 : num1;
    num2 = isNaN(num2) ? 2 : num2;
    num3 = isNaN(num3) ? 3 : num3;

    return num1 + num2 + num3;
}

/* console.log(somar3(4, 5, 6));
console.log(somar3());
console.log(somar3(2));
console.log(somar3(2, 2, 2));
console.log(somar3(2, 2, 2, 2));

console.log(somar3(0, 0, 0)); */

// Forma atual = recomendada
function somar4(num1 = 1, num2 = 2, num3 = 3) {
    return num1 + num2 + num3;
}

/* console.log(somar4(4, 5, 6));
console.log(somar4());
console.log(somar4(2));
console.log(somar4(2, 2, 2));
console.log(somar4(2, 2, 2, 2));

console.log(somar4(0, 0, 0)); */

//console.log(somar4('a', 'b', 'c'));
//console.log(somar4(true, false, 'c'));
//console.log(somar4(2, true, false));

/* 
Em JavaScript, 1 é considerado true e 0 é considerado false
 */

function somar5(num1 = 1, num2 = 2, num3 = 3) {
    if(Number.isSafeInteger(num1) && Number.isSafeInteger(num2) && Number.isSafeInteger(num3)){
        return num1 + num2 + num3;
    }else{
        return 'Não foi possível efetuar a soma.';
    }
}


console.log(somar5(4, 5, 6));
console.log(somar5());
console.log(somar5(2));
console.log(somar5(2, 2, 2));
console.log(somar5(2, 2, 2, 2));

console.log(somar5(0, 0, 0));

console.log(somar5('a', 'b', 'c'));
console.log(somar5(true, false, 'c'));
console.log(somar5(2, true, false));