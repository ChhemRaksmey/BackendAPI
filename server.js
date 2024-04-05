require("dotenv").config();

const bodyParser = require('body-parser');
const express    = require('express');
const route      = express();

route.use(bodyParser.json());

route.use((req, res, next) => {
    next();
});


route.get('/', (req, res) => { res.status(200).json({ body:"data response" }); });


route.listen(process.env.API_PORT, process.env.API_HOST, () => {
    console.log(`server up link ${ process.env.API_HOST }:${ process.env.API_PORT }`);
});
