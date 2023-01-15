var roomData = JSON.stringify({
    "name": "Topic or Room Title",
    "owner_ref": "xyz",
    "settings": {
        "description": "Descriptive text",
        "mode": "group",
        "scheduled": false,
        "scheduled_time": "2022-05-04 23:00:00",
        "adhoc": false,
        "duration": 30,
        "moderators": "1",
        "participants": "5",
        "billing_code": "",
        "auto_recording": false,
        "quality": "SD",
        "canvas": false,
        "screen_share": false,
        "abwd": true,
        "max_active_talkers": 4,
        "knock": false,
        "wait_for_moderator": false,
        "media_zone": "IN",
        "single_file_recording": false,
        "live_recording": {
            "auto_recording": true,
            "url": "https://your-custom-view-url"
        }
    },
    "sip": {
        "enabled": false
    },
    "data": {
        "custom_key": ""
    }
});

module.exports = roomData;