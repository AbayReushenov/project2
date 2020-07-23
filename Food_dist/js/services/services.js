const postData = async (url, data) => {
    let result = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });

    return await result.json();
};

const getResourse = (url) =>  axios.get(url);

export {getResourse};
export {postData};