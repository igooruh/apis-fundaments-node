const axios = require('axios')
const URL = `https://swapi.dev/api/people`

const  getPeople = async (name) => {
    const url = `${URL}/?search=${name}&format=json`
    const response = await axios.get(url)

    return response.data
}

/* getPeople('r2')
    .then(result => console.log('result', result))
    .catch(err => console.error(err)) */

module.exports = {
    getPeople
}
