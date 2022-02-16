
import { combineReducers } from 'redux';

function searchReducer(state = { search_text: '' }, action) {
    switch (action.type) {
        case "SET_SEARCH_KEYWORD":
            return {
                ...state,
                search_text: action.text
            };
    
        default:
            return state;
    }
}

function worksListReducer(state = { worksList: [] }, action) {
    switch (action.type) {
        case "REQUESTED_WORKS":
            return {
                ...state,
                worksList: [],
                isLoading: true
            }
        case "RECEIVED_WORKS":
            return {
                ...state,
                worksList: action.worksList,
                isLoading: false
            };
        case "CLEAR_WORKS_LIST":
            return {
                ...state,
                worksList: [],
                isLoading: false
            };
        default:
            return state;
    }
}

const AppReducer = combineReducers({ 
    search: searchReducer,
    works: worksListReducer
});

export default AppReducer;