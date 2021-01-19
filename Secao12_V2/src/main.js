class App {
    constructor() {
        this.repositorios = [];

        this.formulario = document.querySelector('form');

        this.lista = document.querySelector('.list-group');

        this.registrarEventos();
    }

    registrarEventos() {
       this.formulario.onsubmit = evento => this.adicionarRepositorio(evento); 
    }

    adicionarRepositorio(evento) {
        // Evita que o formulario recarregue a página
        evento.preventDefault();

        //Adiciona o repositorio na lista
        this.repositorios.push({
            nome: 'Nerds Fonts',
            descricao: 'Iconic font aggregator',
            avatar_url: 'https:/avatars0.githubusercontent.com/u/8083459?v=4',
            link: 'https://github.com/ryanosis/nerd-fonts',
        });

       this.renderizarTela();

    }

    renderizarTela() {
        //Limpar o conteudo de lista
        this.lista.innerHTML = '';

        // Percorrer toda a lista de repositorios e criar os elementos
        this.repositorios.forEach(repositorio =>{

            //<li>
            let li = document.createElement('li');
            li.setAttribute('class', 'list-group-item list-group-item-action');
        
            let img = document.createElement('img');
            img.setAttribute('src', repositorio.avatar_url);
            li.appendChild(img);

            let strong = document.createElement('strong');
            let txtNome = document.createTextNode(repositorio.nome);
            strong.appendChild(txtNome);
            li.appendChild(strong);

            let p = document.createElement('p');
            let txtDescricao = document.createTextNode(repositorio.descricao);
            p.appendChild(txtDescricao);
            li.appendChild(p);

            let a = document.createElement('a');
            a.setAttribute('target', 'blank');
            a.setAttribute('href', repositorio.link);
            let txtA = document.createTextNode('Acessar');
            a.appendChild(txtA);
            li.appendChild(a);

            this.lista.appendChild(li);

            this.formulario.querySelector('input[id=repositorio]').value = '';

            //Adiciona o foco no input
            this.formulario.querySelector('input[id=repositorio]').focus();
        });
    }
}

new App();