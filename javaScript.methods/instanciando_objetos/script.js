class Pessoa {
    constructor(nome, sobrenome){
        this._nome = nome;
        this._sobrenome = sobrenome;
    }
    get nome(){
        return this._nome;
    }
    set nome(nome){
        return this._nome = nome;
    }
    get sobrenome(){
        return this._sobrenome;
    }
    set sobrenome(sobrenome){
        return this._sobrenome = sobrenome;
    }
    falar(msg){
        console.log(`${this.nome} está falando ${msg}`);
    }
    comer(){
        console.log(`${this.nome} está comendo...`);
    }
    beber(){
        console.log(`${this.nome} ${this.sobrenome} está bebendo ...`);
    }
}

class Carro {
    constructor(modelo){
        this._marca = 'Honda';
        this._modelo = modelo;
    }
    get marca(){
        return this._marca;
    }
    get modelo(){
        return this._modelo;
    }
    set modelo(modelo){
        this._modelo = modelo;
    }
    imprimir(){
        console.log(`${this.marca} ${this.modelo}`);
    }  
}


//Instanciação de Objetos - Forma 1

/* const curso = {};
curso.nome = 'programação em javascript';
curso.preco = 27.90;

console.log(curso);

curso['qtd alunos'] = 999;

console.log(curso);

delete curso['qtd alunos'];
delete curso['preco'];

console.log(curso); */

//Instanciação de Objetos - Forma 2 - objeto literal 

const programa = {
    nome: 'Photoshop',
    preco: 8999.99,
    fabricante: {
        nome: 'Adobe',
        contato: 'contact@adobe.com',
        endereco: {
            rua: 'Da paz, 68',
            bairro: 'Nova lima',
            cidade: 'São Paulo'
        },
        filiais: [
            {cidade: 'Rio de Janeiro'},
            {cidade: 'Recife'}
        ]
    }
}

/* console.log(programa);

console.log(programa.nome);
console.log(programa.fabricante.nome);
console.log(programa.fabricante.filiais.length);

console.log(programa['fabricante']['filiais'].length); */

/* programa.nome = 'lee sin'
delete programa.fabricante.filiais;
console.log(programa.filiais); */

//Instanciação de Objetos - Forma 3 - objeto literal 

const pessoa = {};

pessoa.nome = 'Mayara';

//Instanciação de Objetos - Forma 4 - funcao construtora

function Lampada(cor){
    this.cor = cor;
}

const l2 = new Lampada('Branca');


//Instanciação de Objetos - Forma 5 - objeto a partir das classes

/* const p1 = new Pessoa('Mayara', 'Vieira');

console.log(p1);
console.log(typeof(p1));
console.log(p1.nome);
console.log(p1.sobrenome);

p1.nome = 'Gragas';
console.log(p1);

p1.falar('bem altoo hahah');
p1.comer();
p1.beber(); */

const fit = new Carro('FIT');

fit.imprimir();