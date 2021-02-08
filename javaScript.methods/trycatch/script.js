//console.log(nome); //ReferenceError

//console.log('Oi...');

//console.log(4.Oi());


//tratamos erros com trycatch
/* try{
    console.log(nome);
}catch(e){
    console.log('Não foi possivel imprimir nome.');
    console.log(e.name);
    console.log(e.message);
} */

/* console.log("Oi..."); */


function dividir(num1, num2) {
    if(num1 === 0 || num2 === 0){
        throw("Os valores devem ser positivos.")// lançando uma excessão  (erro)
    }else{
        return num1 / num2;
    }
}

try{
let ret = dividir(8, 2);
console.log(ret);
}catch(e){
    console.log('Não foi possível dividir.')
}finally{
    console.log('Vamos continuar...')
}