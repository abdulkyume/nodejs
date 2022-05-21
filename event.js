const events = require("events");
const event = new events.EventEmitter();
const event1 = new events.EventEmitter();
const event2 = new events.EventEmitter();
const event3 = new events.EventEmitter();

event.on('click', ()=>{
    console.log("First Event");
});
event.emit('click');


event1.on('click', (d)=>{
    console.log(d);
});
event1.emit('click',"First Event parameter passed");


const first_event = function(d){
    console.log("event called- "+d);
}

event2.on('click',first_event);
event2.emit('click','parameter passed to first event')

const second_event = function(d){
    console.log("event called- "+d);
    event2.emit('click','parameter passed to first event')
}

event3.on('click',second_event);
event3.emit('click','parameter passed to second event')