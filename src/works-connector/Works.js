
//const url = 'https://reststop.randomhouse.com/resources/works/?start=0&max=6&expandLevel=1&search=';
const url = 'https://reststop.randomhouse.com/resources/titles?start=0&max=6&expandLevel=1&search=';
let previousAbortController;

export function searchWorks(keyword) {
    previousAbortController?.abort();
    const abortController = new AbortController();
    previousAbortController = abortController;
    return fetch(url + keyword, {
        headers: { 'Accept':'application/json' },
        signal: abortController.signal
    });
}