import $ from 'jquery';

export const API_REQUEST_SUCCESS = 'search:updateSearch';
export const API_REQUEST_ERROR = 'search:showError';
export const API = 'search:showSuccess';

export function updateSearch(newSearch){
    return {
        type: API_REQUEST_SUCCESS,
        payload: {
            search: newSearch
        }
    }
}

export function showError() {
    return {
        type: API_REQUEST_ERROR,
        payload: {
            search: 'ERROR!'
        }
    }
}

export function showSuccess(data) {
    return {
        type: API_REQUEST_SUCCESS,
        payload: {
            search: data
        }
    }
}

const searchTerm = 'React';

export function apiRequest() {
    return dispatch => {
        $.ajax({
            url: `http://hn.algolia.com/api/v1/search?query=${searchTerm}`,
            success(response){
                console.log('SUCCESS!')
                console.log(response, "RESPONSE")
                dispatch(showSuccess(response.hits))
            },
            error(){
                console.log('ERROR!')
                dispatch(showError());
            }
        })
    }
}

