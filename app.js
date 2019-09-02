var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost:5672', function (err, conn) {
    conn.createChannel(function (err, ch) {
        var q = 'queue_node';
        var msg = 'Hello World 123!';
        ch.assertQueue(q, {
            durable: false
        });
        ch.sendToQueue(q, Buffer.from(msg));
        console.log(" [x] Sent %s", msg);
    });
    setTimeout(function () {
        conn.close();
        process.exit(0)
    }, 500);
});