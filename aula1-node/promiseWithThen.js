/**
 *  1 - Obter um usuário
 *  2 - Obter número de telefone de um usuário a partir de seu ID
 *  3 - Obter o endereço de um usuário a partir de seu ID
 */
// importando módulo interno do node.js converter callback em promise
// para utilizar esta lib a função deve ser escrita de forma anonima
// promisify não deve ser usado para todas as callbacks, pois as vezes ela passa valores diferente de null
// no primeiro parametro da callback
const util = require('util')
const getAdressAsync = util.promisify(getAdressPromiseThen);

const getUserPromiseThen = () => {
    return new Promise(resolvePromise = (resolve, reject) => {
        // return reject(new Error('DEU RUIM DE VERDADE'));

        setTimeout(() => {
            return resolve({
                id: 1,
                name: "Ígor Pedro",
                dateBorn: new Date(),
            });
        }, 1000); 
    });
};

const getPhonePromiseThen = idUser => {
    return new Promise(resolvePromise = (resolve, reject) => {
        setTimeout(() => {
            return resolve({
                phone: "99999-9999",
                ddd: 61,
            });
        }, 2000);
    });
};

function getAdressPromiseThen(idUser, callback) {
    setTimeout(() => {
        return callback(null, {
            street: 'Street Bobos',
            number: 0
        })
    }, 2000);
}

const userPromise = getUserPromiseThen();

userPromise
    .then(user => {
        return getPhonePromiseThen(user.id)
            .then(resolvePhone = result => {
                return {
                    user: {
                        name: user.name,
                        id: user.id
                    },
                    phone: result
                }
            })
    })
    .then(resultado => {
        const adress = getAdressAsync(resultado.user.id)

        return adress.then(resolveAdress = resultAdress => {
            return {
                user: resultado.user,
                phone: resultado.phone,
                adress: resultAdress
            }
        })
    })
    .then(resultFinal => console.log(`
        Nome: ${resultFinal.user.name}
        Endereço: ${resultFinal.adress.street}, ${resultFinal.adress.number}
        Telefone: (${resultFinal.phone.ddd}) ${resultFinal.phone.phone}
    `))
    .catch(err => console.error(err));
