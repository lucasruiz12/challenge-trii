const axios = require('axios')

const getAllCharacters = async () => {
    const allCharacters = await axios.get('https://rickandmortyapi.com/api/character')
    return allCharacters.data.results
}

const getByName = async (name) => {
    const byName = await axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`)
    return byName.data.results
}

const getOneCharacter = async (id) => {
    const allCharacters = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    return allCharacters.data
}

module.exports = {
    getAllCharacters,
    getOneCharacter,
    getByName
}