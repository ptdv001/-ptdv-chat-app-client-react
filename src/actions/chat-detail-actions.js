// Actions Types
// and "actions only describe what happened"
//
// Note: in strings ike Subjects or Topics in pub-sub
// also could scope e.g.
// CHAT_DETAIL_ADD = chat_detail:add
//

export const CHAT_DETAIL_ADD = 'CHAT_DETAIL_ADD';
export const CHAT_DETAIL_UPDATE = 'CHAT_DETAIL_UPDATE';
export const CHAT_DETAIL_SHOW_ERROR = 'CHAT_DETAIL_SHOW_ERROR';

export const API_CHAT_DETAILS = '/data-mocks/project-data-chatDetails.json';

export function chatDetailAdd(chatDetail) {
    return {
        type: CHAT_DETAIL_ADD,
        payload: {
            chatDetail
        }
    }
}

// TODO action right place for an API call?
// Redux Thunk middleware setup to allow seemless AJAX storage with store
export function chatDetailAddApi() {
    return dispatch => {
        const chatDetailPromise = fetch(API_CHAT_DETAILS)
            .then((response) => {
                return response.json();
            })
            .catch(error => dispatch(chatDetailShowError(error)));

        chatDetailPromise
            .then(response => {
                dispatch(chatDetailAdd(response));
            })
            .catch(error => dispatch(chatDetailShowError(error)));
    }
}

export function chatDetailUpdate(chatDetail) {
    return {
        type: CHAT_DETAIL_UPDATE,
        payload: {
            chatDetail
        }
    }
}

export function chatDetailShowError(errorMessage) {
    return {
        type: CHAT_DETAIL_SHOW_ERROR,
        payload: {
            error: errorMessage
        }
    }
}
