/**
 *  Promise é utilizado quando precisamos manipular o resultado de uma requisição. 
*/
const util = require('util')
const getAdressAsync = util.promisify(getAdressPromiseThen);

const getUserPromiseThen = () => {
    return new Promise(resolvePromise = (resolve, reject) => {
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

main();
async function main() {
    try {
        // Calculando execução
        console.time('medida-promise');
        const user = await getUserPromiseThen();
        /* const phone = await getPhonePromiseThen(user.id);
        const adress = await getAdressAsync(user.id); */

        const result = await Promise.all([
            getPhonePromiseThen(user.id),
            getAdressAsync(user.id)
        ]);

        const adress = result[1];
        const phone = result[0];

        console.log(`
            Nome: ${user.name}
            Telefone: (${phone.ddd}) ${phone.phone}
            Endereço: ${adress.street}, ${adress.number} 
        `);

        console.timeEnd('medida-promise');
    }
    catch(err) {
        console.error(err);
    }
}