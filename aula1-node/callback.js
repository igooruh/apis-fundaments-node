/**
 *  1 - Obter um usuário
 *  2 - Obter número de telefone de um usuário a partir de seu ID
 *  3 - Obter o endereço de um usuário a partir de seu ID
 */

const getUser = callback => {
    setTimeout(() => {
        return callback(null, {
            id: 1,
            name: 'Ígor Pedro',
            dateBorn: new Date()
        })
    }, 1000);
}

const getPhone = (idUser, callback) => {
    setTimeout(() => {
        return callback(null, {
            phone: '99999-9999',
            ddd: 61
        })
    }, 2000);
}

const getAdress = (idUser, callback) => {
    setTimeout(() => {
        return callback(null, {
            street: 'Street Bobos',
            number: 0
        })
    }, 2000);
}


getUser(function solveUser(error, user) {
    if (error) {
        console.error('Deu ruim', error)
        return;
    }

    getPhone(user.id, function solvePhone(errorP, phone) {
        if(errorP) {
            console.error('Deu ruim telefone', errorP)
            return;
        }

        getAdress(user.id, function solveAdress(errorA, adress) {
            if(errorA) {
                console.error('Deu ruim endereço', errorA)
                return;
            }

            console.log(`
                Name: ${user.name}
                Adress: ${adress.street}, ${adress.number}
                Phone: (${phone.ddd}) ${phone.phone}
            `)
        })
    })
});