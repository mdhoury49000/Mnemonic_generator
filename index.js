const express =  require('express');
const {generatePool} = require("./app.js")// Assurez-vous que votre fichier s'appelle correctement

const app = express();
const port = 3000;

const pool = generatePool(); 

app.get('/start', (req, res) => {
    pool.start();
    res.send('Processus démarré.');
});

app.get('/stop', (req, res) => {
    pool.stop();
    res.send('Processus arrêté.');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
