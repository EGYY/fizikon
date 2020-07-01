import {
    ON_SEARCH,
    ON_FILTER,
    SET_FILTER_SUBJ,
    SET_FILTER_GENRE,
    SET_FILTER_GRADE,
    SEARCH_BY_KEYWORD,
    SET_PRICE
} from "../types";

String.prototype.searchSubj = function (keyword) {
    let item = this.toLowerCase(),
        i = 0,
        n = -1,
        l;

    keyword = keyword.toLowerCase();
    for (; l = keyword[i++];) if (!~(n = item.indexOf(l, n + 1))) return false;
    return true;
};

const searchSubj = () => {
    return async dispatch => {
        try {
            const url = 'http://krapipl.imumk.ru:8082/api/mobilev1/update';
            const body = {'data': ''};
            const response = await fetch(url, {
                method: 'POST',
                body
            });
            const data = await response.json();
            console.log(data);
            dispatch({type: ON_SEARCH, payload: data.items});
        } catch (e) {
            console.log(e);
        }
    }
}

const setFilter = (filter, type) => {
    switch (type) {
        case 'search':
            return ({type: SEARCH_BY_KEYWORD, payload: filter});

        case 'subject':
            return ({type: SET_FILTER_SUBJ, payload: filter});

        case 'genre':
            return ({type: SET_FILTER_GENRE, payload: filter});

        case 'grade':
            return ({type: SET_FILTER_GRADE, payload: filter});
    }
}

const setPrice = (price) => {
    return({type:SET_PRICE, payload:!price});
}


const filterData = (data, filterSubj, filterGenre, filterGrade, keyword) => {

    const newData = data.filter(item => {
        let filteredData = true;
        if (keyword && (keyword.length > 2)) {
            filteredData = filteredData && (item.title.searchSubj(keyword));
        }
        if (filterSubj != 'default') {
            filteredData = filteredData && (filterSubj == item.subject);
        }
        if (filterGenre != 'default') {
            filteredData = filteredData && (filterGenre == item.genre);
        }
        if (filterGrade != 'default') {
            const arrGrade = item.grade.split(';');
            const arrGradeNum = arrGrade.map(num => +num);
            filteredData = filteredData && (arrGradeNum.indexOf(filterGrade) > -1);
        }
        return filteredData;
    });

    return ({type: ON_FILTER, payload: newData})


}

export {
    searchSubj,
    filterData,
    setFilter,
    setPrice
}