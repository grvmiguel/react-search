import { searchWorks } from '../works-connector/Works';

/* SEARCH KEYWORD */

export function setSearchKeyword(text) {
    return {
        type: 'SET_SEARCH_KEYWORD',
        text: text
    }
}

/* SEARCH CLEAR AND FETCH */

export function clearWorksList() {
    return {
        type: 'CLEAR_WORKS_LIST'
    }
}

function receiveWorks(worksList) {
    return {
        type: 'RECEIVED_WORKS',
        worksList: worksList
    }
}

function requestWorks() {
    return {
        type: 'REQUESTED_WORKS'
    }
}

export function fetchWorks(keyword) {
    return (dispatch) => {
        dispatch(requestWorks());

        searchWorks(keyword)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                const { title: work } = json;
                if(work) {
                    // if there are results
                    if(Array.isArray(work)) {
                        // if there are more than one result
                        const worksList = work.map(elem => ({ title: elem.titleweb, desc: elem.authorweb, img: elem['@uri'] }));
                        dispatch(receiveWorks(worksList));
                    } else {
                        // if there is only one result
                        dispatch(receiveWorks([{ title: work.titleweb, desc: work.authorweb }]));
                    }
                } else {
                    dispatch(receiveWorks([]));
                }
            }).catch(err => {
                if(err.name !== "AbortError") {
                    throw err;
                }
            });
    };
}