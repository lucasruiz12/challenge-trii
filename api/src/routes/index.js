const { Router } = require('express');
const router = Router();
/* const axios = require("axios"); */

const charactersRoute = require('./characters');

router.use('/character', charactersRoute);

module.exports = router;