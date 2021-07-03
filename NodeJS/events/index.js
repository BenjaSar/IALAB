const {EventEmitter} = require('events');

const emiiter = new EventEmitter();

emiiter.on('save', ({date})=> {
    console.log('***Event fired***', date)
})

setInterval(()=>{
//emision del evento
    emiiter.emit('save', {date:Date.now()})
}, 1000)
