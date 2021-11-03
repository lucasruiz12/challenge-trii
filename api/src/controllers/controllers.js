const axios = require('axios')

const getAllCharacters = async () => {
    const allCharacters = await axios.get('https://rickandmortyapi.com/api/character')
    return allCharacters.data.results
}

const getByName = async (name) => {
    const byName = await axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`)
    return byName.data.results
}

module.exports = {
    getAllCharacters,
    getByName
}