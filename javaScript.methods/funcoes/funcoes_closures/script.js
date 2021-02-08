/* let gragas = 'global'; // pode ser acessada globalmente no projeto

function imprimir(){
    console.log(gragas);
}


function outra(){
    let gragas = 'local';
    imprimir();
    console.log(gragas);
}

outra(); */

let variavel = 'global';

function externa(){
    let variavel = 'local';

    function interna(){
        return variavel;
    }
    return interna;
}

let executa = externa();

console.log(executa());