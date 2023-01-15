const axios = require('axios');
const axiosConfig = require('./axiosConfig');
const roomData = require('./roomData');

const roomApis = {};

roomApis.createRoom = async() => {
    return new Promise((resolve, reject) => {
        let data = {
            method: 'post',
            url: `https://${process.env.CREATE_ROOM_API}/v1/rooms/`,
            appId: process.env.APP_ID,
            appKey: process.env.APP_KEY,
            data: roomData
        }
        let config = axiosConfig(data);
        axios(config)
            .then(function (response) {
                // console.log(JSON.stringify(response.data));
                resolve(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log('error in createRoom ',error);
                reject(error);
            });

    })
}

roomApis.createToken = async(tokenData) => {
    return new Promise((resolve, reject) => {
        let data = {
            method: 'post',
            url: `https://${process.env.CREATE_ROOM_API}/v1/rooms/${tokenData.roomId}/tokens`,
            appId: process.env.APP_ID,
            appKey: process.env.APP_KEY,
            data: JSON.stringify({name: tokenData.name, role: tokenData.role, user_ref: tokenData.user_ref})
        }
        let config = axiosConfig(data);
        console.log('config token ', config);
        axios(config)
            .then(function (response) {
                // console.log(JSON.stringify(response.data));
                resolve(JSON.stringify(response.data));
            })
            .catch(function (error) {
                // console.log('error in creating token ',error.response);
                reject(error);
            });
    })
}

module.exports = roomApis;