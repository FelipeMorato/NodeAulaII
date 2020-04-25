const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

// * app.get('/', function(req,res) {
app.get('/', (req,res) => {
    res.send('Cheguei na minha rota de GET')
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
