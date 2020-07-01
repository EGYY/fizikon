import {
    ON_SEARCH,
    ON_FILTER,
    SEARCH_BY_KEYWORD,
    SET_FILTER_GENRE,
    SET_FILTER_GRADE,
    SET_FILTER_SUBJ,
    SET_PRICE
} from "../types";


const initialState = {
    data: [],
    filteredData: [],
    filterSubj: 'default',
    filterGenre: 'default',
    filterGrade: 'default',
    keyword: '',
    price: true
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRICE:
            return {...state, price: action.payload};
        case ON_SEARCH:
            return {...state, data: action.payload, filteredData: action.payload};
        case ON_FILTER:
            return {...state, filteredData: action.payload};
        case SEARCH_BY_KEYWORD:
            return {...state, keyword: action.payload};
        case SET_FILTER_GENRE:
            return {...state, filterGenre: action.payload};
        case SET_FILTER_GRADE:
            return {...state, filterGrade: action.payload};
        case SET_FILTER_SUBJ:
            return {...state, filterSubj: action.payload};
        default:
            return state;
    }
}

export default searchReducer;