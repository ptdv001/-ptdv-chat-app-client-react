export const CHAT_ROOM_ADD = 'CHAT_ROOM_ADD';
export const CHAT_ROOM_API_ERROR = 'CHAT_ROOM_API_ERROR';

export const API_CHAT_ROOM = '/api/chat';

export function chatRoomAdd(chatRooms) {
    return {
        type: CHAT_ROOM_ADD,
        payload: {
            chatRooms
        }
    }
}

export function chatRoomAddApi(testAPIUrl) {
    return dispatch => {
        const chatRoomPromise = fetch(testAPIUrl || API_CHAT_ROOM)
            .then((response) => {
                return response.json();
            })
            .catch(error => dispatch(chatRoomShowError(error)));

        chatRoomPromise
            .then(response => {
                dispatch(chatRoomAdd(response));
            })
            .catch(error => dispatch(chatRoomShowError(error)));
    }
}

export function chatRoomShowError(errorMessage) {
    return {
        type: CHAT_ROOM_API_ERROR,
        payload: {
            error: errorMessage
        }
    }
}
