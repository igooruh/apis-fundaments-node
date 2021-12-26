const { getPeople } = require('./services')

async function main() {
    try {
        const { results } = await getPeople('a')

        const familyLars = results.filter(item => {
            /**
             * por padrão precisa retornar um booleano
             * para informar se precisa remover ou manter o item da lista
             * false > remove
             * true > mantem
             * não encontrou > -1
             * encontrou = posição no array
             */
            const result = item.name.toLowerCase().indexOf('lars') !== -1

            return result
        })

        const names = familyLars.map(pessoa => pessoa.name)
        console.log(names)
    } catch (err) {
        console.error(err)
    }
}

main()