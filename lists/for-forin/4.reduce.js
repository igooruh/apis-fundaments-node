const { getPeople } = require('./services')

async function main() {
    try {
        const { results } = await getPeople('a')

        const height = results.map(item => parseInt(item.height))

        const total = height.reduce((previous, next) => {
            return previous + next
        })

        console.log(total)
    } catch (error) {
        console.error(error)
    }
}

main()
