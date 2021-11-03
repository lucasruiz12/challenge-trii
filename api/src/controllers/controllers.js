const axios = require('axios')

const getOneCharacter = async (id) => {
    const allCharacters = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    return allCharacters.data
}

module.exports = {
    getOneCharacter,
}