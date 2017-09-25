const express = require('express');
const reload = require('reload');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('./public'));

app.get('/', (req, res) => res.render('home'));

app.get('/params', (req, res) => {
    res.render('params', { a: 100, arrPerson });
});

app.get('/a/b', (req, res) => res.render('ab'));

reload(app);
app.listen(3000, () => console.log('Server start!'));

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const arrPerson = [
    new Person('Ti', 10),
    new Person('Teo', 15),
    new Person('Tun', 20)
];
