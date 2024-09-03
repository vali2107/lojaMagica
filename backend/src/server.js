// Importar pacotes para a aplicação
const express = require('express');
const cors = require('cors');

// Definir a porta do express e instanciar o express
const port = 3006;
const app = express();

// Habilita o cors e json
app.use(cors());
app.use(express.json());

// Testar servidor
app.listen(port, () => console.log(`Rodando na porta ${port}`));

// Importar a conexão com o banco
const connection = require('./db_config')

// Definir portas de usuário
app.post('/usuario/cadastrar', (req, res) => {
    let params = Array(
        req.body.name,
        req.body.email,
        req.body.password,
        req.body.cpf_number
    );
    let query = "INSERT INTO users(name, email, password, cpf_number) VALUES(?,?,?,?);";
    connection.query(query,params, (err, results) => {
        if(results) {
            res
                .status(201)
                .json({
                    success: true,
                    message: "Sucesso",
                    data: results
                })
        } else {
            res
                .status(400)
                .json({
                    success: false,
                    message: "Sem Sucesso",
                    data: err
                })
        }
    })
});

app.post('/usuario/login', (req, res) => {
    let params = Array(
        req.body.email,
        req.body.password,
    );    
    let query = "SELECT * FROM users WHERE email = ? AND password = ?;";

    connection.query(query,params, (err, results) => {
        if(results) {
            res
                .status(201)
                .json({
                    success: true,
                    message: "Sucesso",
                    data: results
                })
        } else {
            res
                .status(400)
                .json({
                    success: false,
                    message: "Sem Sucesso",
                    data: err
                })
        }
    })
});

app.get('/usuario/listar', (req, res) => {
    const query = "SELECT * FROM users";

    connection.query(query,params, (err, results) => {
        if(results) {
            res
                .status(201)
                .json({
                    success: true,
                    message: "Sucesso",
                    data: results
                })
        } else {
            res
                .status(400)
                .json({
                    success: false,
                    message: "Sem Sucesso",
                    data: err
                })
        }
    })
});

app.put('/usuario/editar/:id', (req, res) => {
    let params = Array(
        req.body.name,
        req.params.id
    )
    let query = "UPDATE users SET name = ? WHERE id = ?";

    connection.query(query,params, (err, results) => {
        if(results) {
            res
                .status(201)
                .json({
                    success: true,
                    message: "Sucesso",
                    data: results
                })
        } else {
            res
                .status(400)
                .json({
                    success: false,
                    message: "Sem Sucesso",
                    data: err
                })
        }
    })
});

app.delete('/usuario/delete/:id', (req, res) => {
    let params = Array(
        req.params.id
    )
    let query = "DELETE FROM users WHERE id = ?";

    connection.query(query,params, (err, results) => {
        if(results) {
            res
                .status(201)
                .json({
                    success: true,
                    message: "Sucesso",
                    data: results
                })
        } else {
            res
                .status(400)
                .json({
                    success: false,
                    message: "Sem Sucesso",
                    data: err
                })
        }
    })
});

// Definir portas de produtos
// Cadastrar produto
app.post('/usuario/cadastrar', (req, res) => {
    let params = Array(
        req.body.nome,
        req.body.descricao,
        req.body.valor,
        req.body.src
    );

    let query = "INSERT INTO produtos(name, descricao, valor, src) VALUES(?,?,?,?);";
    connection.query(query,params, (err, results) => {
        if(results) {
            res
                .status(201)
                .json({
                    success: true,
                    message: "Sucesso",
                    data: results
                })
        } else {
            res
                .status(400)
                .json({
                    success: false,
                    message: "Sem Sucesso",
                    data: err
                })
        }
    })
});
// Listar produtos
app.get('/usuario/listar', (req, res) => {
    const query = "SELECT * FROM produtos";

    connection.query(query,params, (err, results) => {
        if(results) {
            res
                .status(201)
                .json({
                    success: true,
                    message: "Sucesso",
                    data: results
                })
        } else {
            res
                .status(400)
                .json({
                    success: false,
                    message: "Sem Sucesso",
                    data: err
                })
        }
    })
});
// Editar produto
app.put('/usuario/editar/:id', (req, res) => {
    let params = Array(
        req.body.valor,
        req.params.id
    )
    let query = "UPDATE produtos SET valor = ? WHERE id = ?";

    connection.query(query,params, (err, results) => {
        if(results) {
            res
                .status(201)
                .json({
                    success: true,
                    message: "Sucesso",
                    data: results
                })
        } else {
            res
                .status(400)
                .json({
                    success: false,
                    message: "Sem Sucesso",
                    data: err
                })
        }
    })
});
// Deletar produto
app.delete('/usuario/delete/:id', (req, res) => {
    let params = Array(
        req.params.id
    )
    let query = "DELETE FROM produtos WHERE id = ?";

    connection.query(query,params, (err, results) => {
        if(results) {
            res
                .status(201)
                .json({
                    success: true,
                    message: "Sucesso",
                    data: results
                })
        } else {
            res
                .status(400)
                .json({
                    success: false,
                    message: "Sem Sucesso",
                    data: err
                })
        }
    })
});

// Definir portas de carrinho
// Adicionar no carrinho
// Tirar do carrinho

// Definir portas de favoritos
// Adicionar favoritos
// Tirar favoritos