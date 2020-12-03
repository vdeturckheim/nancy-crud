const Express = require('express');
const app = Express();

const DB = require('./db');

app.get('/posts', (req, res, next) => {

    DB.all('SELECT * FROM POSTS', (err, rows) => {
        if (err) return next(err);

        res.json(rows);
    });
});

app.listen(8080);
