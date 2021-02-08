function fabricar_curso(n, p){
    const desconto = 0.90;
    return {
        nome: n,
        preco: (p * desconto).toFixed(2)
    }
}

console.log(fabricar_curso('League of Legends', 28.11));
console.log(fabricar_curso('Counter Strike', 18.71));

cursos = []

for( let i = 0; i < 5; i++){
    cursos.push(fabricar_curso(`Cursos ${i + 1}`, `${19.99 + i * 3}`));
}

console.log(cursos);