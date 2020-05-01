var amqp = require('amqplib');
var helpers = require('./helpers');
var faker = require('faker');
var q = 'mensagens';
var message_id = 1;

amqp.connect('amqp://localhost:5672')
    .then(function (conn) {
        return conn.createChannel();
    }).then(function (ch) {

        setInterval(function () {
            ch.assertQueue(q).then(function (ok) {

                const buff = helpers.JSONtoBuffer({                    
                    'message_id' : message_id,
                    'order_id': faker.random.number(),
                    'name': `${faker.name.firstName()} ${faker.name.lastName()} `
                });                                
                ch.sendToQueue(q, buff);
                message_id++;
            });
        }, 2000);    

    }).catch(console.warn);