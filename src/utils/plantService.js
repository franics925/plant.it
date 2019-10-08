const BASE_URL='/api/plants/';

function search(term) {
    return fetch(`${BASE_URL}search`)
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
