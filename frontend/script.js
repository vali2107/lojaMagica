async function cadastrar(event) {
    event.preventDefault();

    const name = document.getElementById('name_cadastro').value;
    const email = document.getElementById('email_cadastro').value;
    const password = document.getElementById('password_cadastro').value;

    const data = {name, email, password}

    const response = await fetch('http://localhost:3006/usuario/cadastrar', {
        method: 'POST',
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    })

    const results = await response.json();

    if(results.success) {
        alert(results.message)
        window.location.href = './home.html';
    } else {
        alert(results.message)
    }
};

async function login(event) {
    event.preventDefault();

    const email = document.getElementById('email_login').value;
    const password = document.getElementById('password_login').value;

    const data = {email, password}

    const response = await fetch('http://localhost:3006/usuario/login', {
        method: 'POST',
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    })

    let results = await response.json();

    if(results.success) {
        let userData = results.data;
        localStorage.setItem('informações', JSON.stringify(userData))
        let html = document.getElementById('informacoes')
        let dados = JSON.parse(localStorage.getItem('informacoes'))
        html.innerHTML = `<div style="display: flex; flex-direction: column; align-items: end">
                        Perfil: ${dados.perfil}
                        </div>`
        html.style.display = 'block'

        alert(results.message)
        window.location.href = './home.html';
    } else {
        alert(results.message)
    }
};