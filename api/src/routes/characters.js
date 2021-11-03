const router = require('express').Router();
const { getAllCharacters, getOneCharacter, getByName } = require('../controllers/controllers');

router.get("/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
        const oneData = await getOneCharacter(id);
        res.json(oneData)
    }
    catch (error) {
        next(error);
    }
})

module.exports = router;