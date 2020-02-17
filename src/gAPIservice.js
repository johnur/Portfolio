export const getEmailJSuserID = () =>
    fetch('https://qbf7fbdje7.execute-api.eu-north-1.amazonaws.com/default/Portfolio', {
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    })
        .then(res => res.json())