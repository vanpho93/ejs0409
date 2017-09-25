const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('./public'));

app.get('/', (req, res) => res.render('home'));

app.get('/a/b', (req, res) => res.render('ab'));

app.listen(3000);
