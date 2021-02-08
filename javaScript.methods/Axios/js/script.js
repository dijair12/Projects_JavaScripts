//Axios

btn = document.querySelector('#btn');
div = document.querySelector('#app');


btn.onclick = () => {
    div.innerHTML = '';

    let spanNome = document.createElement('span');

    let txtNome = '';

    let github_user = document.querySelector('input[name=github_user]');
    let user = github_user.value;

    github_user.value = '';

    axios.get(`https://api.github.com/users/${user}`)
        .then((response) => {
            if(response.data.name != null){
                txtNome = document.createTextNode(response.data.name);

                let img = document.createElement('img');
                img.setAttribute('src', response.data.url);
                img.setAttribute('alt', response.data.name);
                img.setAttribute('width', '45px');
                img.setAttribute('height', '45px');
            }else{
                txtNome = document.createTextNode('O usuário não possui nome.');
            }

            spanNome.appendChild(txtNome);
            div.appendChild(spanNome);
        })
        .catch(function(error){
            txtNome = document.createTextNode('Não foi possível realizar a requisição.')

            spanNome.appendChild(txtNome);
            div.appendChild(spanNome);
        })

}