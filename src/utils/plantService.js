const BASE_URL='/api/plants/';

function search(query) {
    return fetch(`${BASE_URL}search?q=${query}`)
    .then(res => {
        if (res.ok) return res.json();
    })
    .then(data => {
        return data;
    })
}

export default {
    search,
}
