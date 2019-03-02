// Actions (or "topics" ID an event and are triggered by UI(/*?) )

/* TODO come back to this and see if important enough to note..
 *
 * Note: that Flux is not Redux and Flux seems to be more of an action protocol
 * loosely followed by Redux.
 *
 * Why:
 * "The real boilerplate of Flux is conceptual: the need to emit an update,
 * the need to register the Store with a Dispatcher, the need for the Store to
 * be an object (and the complications that arise when you want a universal
 * app). Redux solves these problems by using pure reducers instead of event
 * emitters."
 */

 import {
    CHAT_DETAIL_ADD,
    CHAT_DETAIL_UPDATE,
    CHAT_DETAIL_SHOW_ERROR,
    chatDetailAdd,
    chatDetailAddApi,
    chatDetailUpdate,
    chatDetailShowError
} from './chat-detail-actions';

import {
    CHAT_ROOM_ADD,
    CHAT_ROOM_API_ERROR,
    chatRoomAdd,
    chatRoomAddApi,
    chatRoomShowError
} from './chat-room-actions';

// Shared Actions
const CHAT_ID_ACTIVE = 'CHAT_ID_ACTIVE';

// Action Creators
// and "describe how the application's state changes" (logic or smarts here)
//
// Note: could also bind to dispatch() here with fn = y => dispatch(updateAction(y))
function chatIdActiveUpdate(chatId) {
    // Note: Actions must contain one action "type"
    return {
        type: CHAT_ID_ACTIVE,

        // Note: Payload is optional but like for clarity
        payload: {
            chatId
        }
    };
}

 export {
    CHAT_ID_ACTIVE,
    CHAT_DETAIL_ADD,
    CHAT_DETAIL_UPDATE,
    CHAT_DETAIL_SHOW_ERROR,
    chatIdActiveUpdate,
    chatDetailAdd,
    chatDetailAddApi,
    chatDetailUpdate,
    chatDetailShowError,

    CHAT_ROOM_ADD,
    CHAT_ROOM_API_ERROR,
    chatRoomAdd,
    chatRoomAddApi,
    chatRoomShowError
};
