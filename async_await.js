const novaPromise = () => new Promise ((resolve, reject) => {
    let valor = Math.floor(Math.random() * 10);
    setInterval(() =>{
        if(valor % 2 == 0){
            resolve(`O valor ${valor} é par ...`);
        }else{
            reject(`O valor ${valor} é impar...`);
        }
    }, 1000);
});

async function executarNovaPromise() {
    try{
        const response = await novaPromise();
    }catch(erro){
        console.log(erro);
    }
}

executarNovaPromise();