var amqp = require('amqplib');
var helpers = require('./helpers');
var level = require('level-party');
var uuid = require('uuid');
var db = level('./db');
var q = 'mensagens';

amqp.connect('amqp://rabbitmq:5672')
    .then(function (conn) {
        return conn.createChannel();
    }).then(function (ch) {

        ch.prefetch(1);

        ch.consume(q, function (msg) {
            if (msg !== null) {
                db.put(uuid.v4(), msg.content.toString(), function (err) {
                    if (err) {
                        console.log(err.stack);
                        return ch.nack(msg);
                    }

                    ch.ack(msg);
                    console.log("--------------------------------------------------------------------");
                    console.log(helpers.BufferToJSON(msg.content.toString()))
                });
            }
        });


    }).catch(console.warn)