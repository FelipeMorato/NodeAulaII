const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});

app.use(function(req, res, next) {
    res.status(404).send({menssagem: "rescurso não encontrado"});
    next(err);
  });
