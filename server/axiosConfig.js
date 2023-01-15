function axiosConfig(data) {
    let authFormat = `${data.appId}:${data.appKey}`;
    let encodedAuthorization = Buffer.from(authFormat).toString('base64');
    return (
        {
            method: data.method,
            url: data.url,
            headers: {
                'Authorization': `Basic ${encodedAuthorization}`,
                'Content-Type': 'application/json'
            },
            data: data.data
        }
    )
}


module.exports = axiosConfig;