const BASE_URL='/api/plants/';

function search(query) {
    return fetch(`${BASE_URL}search?q=${query}`, {
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
    
    })
    .then(res => {
        if (res.ok) return res.json();
    })
    .then(data => {
        return data;
    })
}

function queryPlant(pQuery) {
    return fetch(`${BASE_URL}plant/${pQuery}`)
    .then(res => {
        if (res.ok) return res.json();
    })
    .then(data => {
        return data;
    })
}

export default {
    search,
    queryPlant
}
