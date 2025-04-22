const express = require('express');
const fs = require('fs');
const https = require('https');
const socketIo = require('socket.io');
const app = express();

const options = {
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem")
}

const server = https.createServer(options, app);

const io = socketIo(server);
app.use(express.static('src/public'));

io.on('connection', (socket) => {
    const connected = JSON.parse(fs.readFileSync('db.json', 'utf-8'));

    const date = new Date();
    const newconnected = {
        "id": socket.id,
        "jour": date.toLocaleDateString()
    }
    connected.connected.push(newconnected);
    fs.writeFileSync('db.json', JSON.stringify(connected, null, 2));

    const conne = JSON.parse(fs.readFileSync('db.json', 'utf-8'));
    socket.emit('getvisitresponse', conne);
    console.log('user conected')

    socket.on('triebyid', (data) => {
        const reference = JSON.parse(fs.readFileSync('db.json', 'utf-8'));
        const trie = reference.reference.filter(tr => tr.id === data)
        if (trie) {
            socket.emit('connected', { data: trie, socketId: socket.id });
        }
    })

    socket.on('verset', (data) => {
        const reference = JSON.parse(fs.readFileSync('db.json', 'utf-8'));
        const newdatas = {
            "id": data[0],
            "livre": data[1],
            "chapitre": data[2],
            "verset": data[3]
        }

        reference.reference.push(newdatas);
        fs.writeFileSync('db.json', JSON.stringify(reference, null, 2));
        socket.broadcast.emit('newverset', data);
    });

    socket.on('newvisit', (data) => {
        const visites = JSON.parse(fs.readFileSync('db.json', 'utf-8'));
        const newvisit = {
            "ip": data[0],
            "heure": data[1],
        }
        visites.visites.push(newvisit);
        fs.writeFileSync('db.json', JSON.stringify(visites, null, 2));
    });




    socket.on('disconnect', () => {
        const connected = JSON.parse(fs.readFileSync('db.json', 'utf-8'));

        connected.connected = connected.connected.filter(event => event.id !== socket.id);

        fs.writeFileSync('db.json', JSON.stringify(connected, null, 2));


        const visites = JSON.parse(fs.readFileSync('db.json', 'utf-8'));
        socket.emit('getvisitresponse', visites);
        console.log('user decconected')

    });
})


server.listen(3000, () => {
    console.log('server on line on http://localhost:3000')
})