const { getPeople } = require('./services')

Array.prototype.myReduce = function(callback, valueInitial) {
    let valueFinal = typeof valueInitial !== undefined ? valueInitial : this[0]

    for(let index = 0; index <= this.length -1; index++) {
        valueFinal = callback(valueFinal, this[index], this)
    }

    return valueFinal
}

async function main() {
    try {
        const { results } = await getPeople('a')

        const height = results.map(item => parseInt(item.height))

        /* const total = height.reduce((previous, next) => {
            return previous + next
        }) */

        const myList = [
            ['Igor', 'Pedro'],
            ['Node.js', 'NodeBR']
        ]

        const total = myList.myReduce((previous, next) => {
            return previous.concat(next)
        }, [])
        .join(', ')

        console.log(total)
    } catch (error) {
        console.error(error)
    }
}

main()
