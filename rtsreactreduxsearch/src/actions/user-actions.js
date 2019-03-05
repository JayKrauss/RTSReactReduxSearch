import $ from 'jquery';

export const API_REQUEST_SUCCESS = 'users:updateUser';
export const API_REQUEST_ERROR = 'users:showError';
export const API = 'users:showSuccess';

export function updateUser(newUser){
    return {
        type: API_REQUEST_SUCCESS,
        payload: {
            user: newUser
        }
    }
}

export function showError() {
    return {
        type: API_REQUEST_ERROR,
        payload: {
            user: 'ERROR!'
        }
    }
}

export function showSuccess(data) {
    return {
        type: API_REQUEST_SUCCESS,
        payload: {
            user: data
        }
    }
}

const searchTerm = 'USA';

export function apiRequest() {
    return dispatch => {
        $.ajax({
            url: `http://hn.algolia.com/api/v1/search?query=${searchTerm}`,
            success(response){
                console.log('SUCCESS!')
                console.log(response)
                dispatch(showSuccess(response.hits[0].title))
            },
            error(){
                console.log('ERROR!')
                dispatch(showError());
            }
        })
    }
}

