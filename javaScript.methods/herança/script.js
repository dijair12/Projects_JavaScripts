/* 
funcionarios
    nome,
    sobrenome,
    email,
    cpf,
    função,
    registro

clientes
    nome,
    sobrenome,
    email,
    cpf,
    renda

funções
    descrição
    salário
*/

class Funcao{
    constructor(descricao, salario){
        this._descricao = descricao;
        this._salario = salario;
    }

    get descricao() {
        return this._descricao;
    }

    set descricao(descricao) {
        this._descricao = descricao;
    }

    get salario() {
        return this._salario;
    }

    set salario(salario) {
        this._salario = salario;
    }
}

class Pessoa{
    constructor(nome, sobrenome, email, cpf){
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._email = email;
        this._cpf = cpf;
    }

    get nome() {
        return this._nome;
    }

    set nome(nome) {
        this._nome = nome;
    }

    get sobrenome() {
        return this._sobrenome;
    }

    set sobrenome(sobrenome) {
        this._sobrenome = sobrenome;
    }

    get email() {
        return this._email;
    }

    set email(email) {
        this._email = email;
    }

    get cpf() {
        return this._cpf;
    }

    set cpf(cpf) {
        this._cpf = cpf;
    }

    //metodos extras

    get nome_completo(){
        return this._nome + ' ' + this._sobrenome;
    }

    set nome_completo(nome_completo){
        // transforma a string em um array pelo espaço
        nome_completo = nome_completo.split(' ');

        // Remove e retorna o elemento da posição 0 do array
        this._nome = nome_completo.shift();

        //junta os elementos do array em uma string separando cada elemento por espaço
        this._sobrenome = nome_completo.join(' ');
    }

    imprimir_dados(){
    console.log(`${this.nome} ${this.sobrenome}`)
    }
}

class Funcionario extends Pessoa{
    constructor(nome, sobrenome, email, cpf, funcao, registro){
        super(nome, sobrenome, email, cpf);
        this._funcao = funcao;
        this._registro = registro;
    }

    get funcao() {
        return this._funcao;
    }

    set funcao(funcao) {
        this._funcao = funcao;
    }

    get registro() {
        return this._registro;
    }

    set registro(registro) {
        this._registro = registro;
    }
}

class Cliente extends Pessoa{
    constructor(nome, sobrenome, email, cpf, renda){
        super(nome,sobrenome, email, cpf);
        this._renda = renda;
    }

    get renda() {
        return this._renda;
    }

    set renda(renda) {
        this._renda = renda;
    }
}

/* const cliente1 = new Cliente('Felicity', 'Jones', 'felicity@gmail.com', '125.125.214-54', 4521.56)

console.log(cliente1);

console.log(cliente1.nome_completo);

cliente1.nome_completo = 'Xuxa Meneguel';

console.log(cliente1);

cliente1.imprimir_dados(); */

const programador = new Funcao('Programador', 4500.00);
const suporte = new Funcao('Suporte', 2500.00);

const f1 = new Funcionario('Dijair', 'Vieira', 'dijairvieira@gmail.com', '452.452.654-22', programador, 'Fsu41');
const f2 = new Funcionario('Michael', 'Mich', 'michaelmich@gmail.com', '452.784.654-52', suporte, 'F45ufd');

console.log(f1);
console.log(f2);

console.log(f1.funcao.salario);


f1.imprimir_dados();