function Pessoa(n, s, raca = 'humano'){
    // atributos privados só conseguimos fazer uso dentro da função construtora
    let altura = 0.30;
    let peso = 0.5;
    let idade = 0;
    let nome = n;
    let sexo = s;

    //atributo publico pode ser acessado fora da função construtora
    this.raca = raca;

    //metodo privado só conseguimos fazer uso dentro da função construtora
    let imprimir_dados = function(){
        console.log(`Nome: ${nome}, Idade ${idade}, Peso:${peso}, Altura${altura}, Sexo:${sexo}, Raça:${raca}`);

    }

    //metodo publico conseguimos acessar fora da função construtora
    this.fazer_aniversario = function(){
        idade += 1;
        imprimir_dados();
    }

    this.getIdade = function(){
        return idade;
    }
}

const angelina = new Pessoa("Angelina", "Feminino");

console.log(angelina);

console.log(angelina.peso);
console.log(angelina.raca);

angelina.fazer_aniversario();
angelina.fazer_aniversario();

//
const felicity = new Pessoa("Felicity", "Feminino");

felicity.fazer_aniversario();
console.log(felicity.getIdade());

console.log(typeof(Pessoa));
console.log(typeof(felicity));