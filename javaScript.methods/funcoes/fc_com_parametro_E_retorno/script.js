function calcular_idade(ano_nascimento, nome) {
    const data = new Date();

    const idade = data.getFullYear() - ano_nascimento;

    return idade;
}

function calcular_idade2(ano_nascimento) {
    const data = new Date();

    const idade = data.getFullYear() - ano_nascimento;

    console.log(idade);
}


let ret = calcular_idade(1998, 'Dijair');

//console.log(ret + 3);

//calcular_idade2(1998);

//const data = new Date();

//console.log('Data completa ' + data)

//console.log('Ano ' + data.getFullYear());

//console.log('Mês ' + data.getMonth()); // 0 para Janeiro, 1 para Feveiro....(numero do mês menos 1)

function somar(num1, num2) {
    return num1 + num2;
}

console.log(somar(4, 6));

console.log(somar(6)); //NAN not a number

console.log(somar(6, 4, 5));

console.log(somar(6, 4, 5, 6, 6));