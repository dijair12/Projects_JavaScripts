/* 
JSON - JavaScript Object Notation
*/

const curso = {
    nome: 'Programação em JavaScript',
    horas: 27,
    preco(){
        return this.horas * 0.67
    }
}

/* console.log(curso);
console.log(curso.preco()); */

//Convertendo o objeto JavaScript para JSON

const json = JSON.stringify(curso);
console.log(json);
console.log(typeof(json));

//Convertendo de JSON para objeto JS

const obj = JSON.parse(json);
console.log(obj);
console.log(typeof(obj));

const json_corrigido = '{"nome":"Dijair"}'

const novo1 = JSON.parse(json_corrigido);
console.log(novo1);