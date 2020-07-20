import express from 'express';

const app = express();

app.get('/users', (request, response) => {

    console.log('Listagem de usuarios');
    response.json([
        'filamns',
        'filana2',
        '3',
        '4'
    ]) 
});

app.listen(3333);