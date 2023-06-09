const getData = async (url) => {
    const res = await fetch(url);
    
    if(!res.ok) {
        throw new Error(`Could not fetch ${url}, status ${res.status}`);
    }

    return await res.json(); // json(); - декодирует ответ в формате JSON
};

export {getData};