// const io = require('socket.io-emitter')({ host: 'tes-re-1sz7mbmwavj3v.enfqm1.0001.use1.cache.amazonaws.com', port: 6379 });
const { Emitter } = require("@socket.io/redis-emitter");
const { createClient } = require("redis");

const redisClient = createClient({ host: 'tes-re-1sz7mbmwavj3v.enfqm1.0001.use1.cache.amazonaws.com', port: 6379 });
const io = new Emitter(redisClient);
exports.handler = async(event) => {
    const messageBody = JSON.parse(event.Records[0].body);
    console.log('messageBody...', messageBody)
    try {
        io.to(messageBody.message.socketId).emit('async res', messageBody.message);
    } catch (error) {
        console.log('error...', error)
    }
};