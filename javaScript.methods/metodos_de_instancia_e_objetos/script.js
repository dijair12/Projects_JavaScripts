class Carro{
    constructor(modelo){
        this._modelo = modelo;
        this._marca = Carro.retornar_marca();
    
    }
    get modelo(){
        return this._modelo;
    }
    set modelo(modelo){
        this._modelo = modelo;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
    imprimir_dados(){
        console.log(`${this.marca} ${this.modelo}`);
    }
    static retornar_marca(){
        return 'Honda'
    }
}

/* const fit = new Carro('Fit');

fit.imprimir_dados(); */

console.log(Carro.retornar_marca());


//Object.defineProperties()

console.log(Math.random());

console.log(Math.PI);
