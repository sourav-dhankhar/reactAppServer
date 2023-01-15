const express = require('express');
const path = require('path');
const fs = require('fs');
const https = require('https');
const http = require('http');
const bodyParser = require('body-parser');
const roomApis = require('./roomApis');
const cors = require('cors');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true,
}));
app.use(cors());

// console.log('env ', process.env);

app.use(express.static('D:/html/grid'));
// console.log('path ', 'D:/html/grid');
// console.log('roomData ', roomData);

app.post('/createRoom', async (req, res) => {
    // let name = req

    console.log('req.body ', req.body);
    let data = req.body;
    if (data.name.trim() != '') {
        let name = data.name;
        try {
            // let createdRoomData = await roomApis.createRoom();
            // let roomId = JSON.parse(createdRoomData).room.room_id;
            let createdToken = await roomApis.createToken({name: name, roomId: '618f76c75dae7262c0acd287', role: 'Moderator', user_ref: 'Sourav'});
            let createdTokenData = JSON.parse(createdToken);
            console.log('createdToken ', createdTokenData.token);
            res.status(200).send(createdTokenData.token);
        } catch (error) {
            console.log('error ', error.response);
            res.status(404).send();
        }
    }
})


console.log('certkey ', process.env.APP_CERT);

const httpServer = http.createServer(app);
// const httpsServer = https.createServer({
//     key: fs.readFileSync(process.env.APP_CERTKEY),
//     cert: fs.readFileSync(process.env.APP_CERT),
// }, app);

// httpServer.listen(port, () => {
//     console.log('HTTP Server running on port 80');
// });

httpServer.listen(port, () => {
    console.log('HTTPS Server running on port 443');
});