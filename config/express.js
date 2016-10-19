const express = require('express');
const bodyParser = require('body-parser');

module.exports = () => {
    const expressApp = express();

    expressApp.use(bodyParser.json());

    expressApp.get('/sayhello', (req, res) => {
        res.json({
            answer: 'hello'
        });
    });

    expressApp.post('/takethis', (req, res) => {
        if (req.body.name === 'Kurt') {
            res.json({
                text: 'Hi, Kurt'
            });
        } else {
            res.json({
                text: ' I do not know you'
            });
        }
    });

    return expressApp;
};
