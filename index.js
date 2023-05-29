const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const endpoint = '/';
  const method = req.method;
  const queries = req.query;
  res.send(`Endpoint: ${endpoint}\nMethod: ${method}\nQueries: ${JSON.stringify(queries)}`);
});

app.route('/clientes')
  .get((req, res) => {
    const endpoint = '/clientes';
    const method = req.method;
    const queries = req.query;
    res.send(`Endpoint: ${endpoint}\nMethod: ${method}\nQueries: ${JSON.stringify(queries)}`);
  })
  .post((req, res) => {
    const endpoint = '/clientes';
    const method = req.method;
    const queries = req.query;
    res.send(`Endpoint: ${endpoint}\nMethod: ${method}\nQueries: ${JSON.stringify(queries)}`);
  })
  .put((req, res) => {
    const endpoint = '/clientes';
    const method = req.method;
    const queries = req.query;
    res.send(`Endpoint: ${endpoint}\nMethod: ${method}\nQueries: ${JSON.stringify(queries)}`);
  })
  .delete((req, res) => {
    const endpoint = '/clientes';
    const method = req.method;
    const queries = req.query;
    res.send(`Endpoint: ${endpoint}\nMethod: ${method}\nQueries: ${JSON.stringify(queries)}`);
  });

app.route('/produtos')
  .get((req, res) => {
    const endpoint = '/produtos';
    const method = req.method;
    const queries = req.query;
    res.send(`Endpoint: ${endpoint}\nMethod: ${method}\nQueries: ${JSON.stringify(queries)}`);
  })
  .post((req, res) => {
    const endpoint = '/produtos';
    const method = req.method;
    const queries = req.query;
    res.send(`Endpoint: ${endpoint}\nMethod: ${method}\nQueries: ${JSON.stringify(queries)}`);
  })
  .put((req, res) => {
    const endpoint = '/produtos';
    const method = req.method;
    const queries = req.query;
    res.send(`Endpoint: ${endpoint}\nMethod: ${method}\nQueries: ${JSON.stringify(queries)}`);
  })
  .delete((req, res) => {
    const endpoint = '/produtos';
    const method = req.method;
    const queries = req.query;
    res.send(`Endpoint: ${endpoint}\nMethod: ${method}\nQueries: ${JSON.stringify(queries)}`);
  });

app.listen(port, () => {
  console.log(`Aplicação exemplo rodando em http://localhost:${port}`);
});
