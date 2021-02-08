const cursos = [
    'Programação para leigos',
    'Algoritmos e logica de programação',
    'Programação em C',
    'Programação em Java',
    'Programação em Python',
    'Banco de dados',
    'Programação web com Django Framework',
    'Programação em JavaScript'
]
/* const apresentar = (curso, indice) => console.log(`${indice + 1} - ${curso}`);


cursos.forEach(apresentar); // Aqui está ocorrendo o callback

//usando lambda

cursos.forEach(function(curso, indice){
    console.log(`${indice + 1} - ${curso}`);
}) */


const precos = [23.55, 78.23, 899.43, 12.89, 5.23, 67.45];

let menores = []

/* for(let p in precos){
    if( precos[p] < 50){
        menores.push(precos[p]);
    }
} */



/* for(let i = 0; i < precos.length; i++){
    if(precos[i] < 50){
        menores.push(precos[i]);
    }
}
console.log(menores); */


// Forma 1 -Arrow 1
menores = precos.filter((precos)=>{return precos < 50});

console.log(menores);


//Forma 2 - Arrow 2

menores = precos.filter(precos => precos < 50);
console.log(menores);
