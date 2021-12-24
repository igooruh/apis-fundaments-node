const EventEmitter = require('events');

class MyEmissor extends EventEmitter {

}

const myEmissor = new MyEmissor();
const myEvent = 'user:click';

myEmissor.on(myEvent, function(click) {
    console.log('an user clicked', click)
})

/* myEmissor.emit(myEvent, 'na barra de rolagem')
myEmissor.emit(myEvent, 'no ok')

let count = 0
setInterval(() => {
    myEmissor.emit(myEvent, 'no ok' + (count++))
}, 1000); */

const stdin = process.openStdin()
stdin.addListener('data', function(value) {
    console.log(`Você digitou: ${value.toString().trim()}`)
})
