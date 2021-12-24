const service = require('./services')

Array.prototype.MyMap = function(callback) {
    const newArrayMaped = []

    for(let index = 0; index <= this.length - 1; index++) {
        const result = callback(this[index], index)
        newArrayMaped.push(result)
    }

    return newArrayMaped
}

async function main() {
    try {
        const result = await service.getPeople('a')

        // const names = result.results.map(people => people.name)
        const names = result.results.MyMap((people, index) => {
            return `[${index}] ${people.name}` 
        })

        console.log('name', names)
    } catch (error) {
        console.error('deu ruim', error)
    }
}

main()
