import express from 'express';

const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('Made with love using TypeScript..!!');
});

app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`App listening on ${port}`);
});