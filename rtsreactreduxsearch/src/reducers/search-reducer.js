import { API_REQUEST_SUCCESS, API_REQUEST_ERROR } from '../actions/search-actions';

export default function searchReducer(state = '', { type, payload}) {
    switch (type){
        case API_REQUEST_ERROR:
            return payload.search;
        case API_REQUEST_SUCCESS:
            return payload.search;
        default:
        return state;
    }
}
