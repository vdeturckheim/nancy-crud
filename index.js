const Express = require('express');
const BP = require('body-parser');
const app = Express();

const DB = require('./db');

app.use(BP.json());
app.get('/posts', (req, res, next) => {

    DB.all('SELECT * FROM POSTS', (err, rows) => {
        if (err) return next(err);

        res.json(rows);
    });
});

app.get('/posts/:id', (req, res, next) => {

    const postId = req.params.id;

    DB.all('SELECT * FROM POSTS WHERE ID = ?', [postId], (err, rows) => {
        if (err) return next(err);

        res.json(rows);
    });
});

app.listen(8080);
