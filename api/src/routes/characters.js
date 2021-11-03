const router = require('express').Router();
const { getAllCharacters, getByName } = require('../controllers/controllers');

router.get("/", async (req, res, next) => {
    const name = req.query.name;
    try {
        if (!name) {
            const allData = await getAllCharacters();
            res.json(allData);
        } else {
            const filterByName = await getByName(name);
            res.json(filterByName)
        }
    }
    catch (error) {
        next(error);
    }
})

module.exports = router;