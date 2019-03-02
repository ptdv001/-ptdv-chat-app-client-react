// Reducers (or "event handlers" receive an Action to match with a Reducer handler)
//
// and "a pure function that takes the previous state and an action, and returns
// the next state... No side effects. No API calls. No mutations. Just a calculation."
//
// Actions de-coupled from Reducers, so an Action will be checked in all
// below 'combinedReducerrs'
import { combineReducers } from 'redux';
import {
    CHAT_ID_ACTIVE,

    CHAT_DETAIL_ADD,
    CHAT_DETAIL_UPDATE,
    CHAT_DETAIL_SHOW_ERROR,

    CHAT_ROOM_ADD,
    CHAT_ROOM_API_ERROR,
} from '../actions';


const initialState = {
    chatIdActive: null,
    chatDetails: [],
    chatRooms: []
};

//TODO
// add ChatDetail to ChatDetails
// update ChatDetail:id

// add ChatRoom to ChatRooms
// update ChatRoom:id
// add ChatMessage to ChatRoom:id


export function chatIdActivateReducer(state = initialState.chatIdActive, { type, payload }) {
    // console.log('reducer')
    switch(type) {
        case CHAT_ID_ACTIVE:
            // console.log('reducer 2', payload.chatId);
            // no need since primative Object.assign({}, state, { chatIdActive: payload.chatId });
            return payload.chatId;
        default:
            return state;
    }
}

export function chatDetailsReducer(state = initialState.chatDetails, { type, payload }) {
    switch(type) {
        case CHAT_DETAIL_ADD:
            const chatDetails = Array.isArray(payload.chatDetail) ?
                    payload.chatDetail : [payload.chatDetail]

            //TODO dupe check like chatRoomsReducer

            return [...state, ...chatDetails];
        case CHAT_DETAIL_UPDATE:
            //TODO
            return state;
        case CHAT_DETAIL_SHOW_ERROR:
            return payload;
        default:
            return state;
    }
}

export function chatRoomsReducer(oldChatRooms = initialState.chatRooms, { type, payload }) {
    switch(type) {
        case CHAT_ROOM_ADD:
            const addingChatRooms = Array.isArray(payload.chatRooms) ?
                    payload.chatRooms : [payload.chatRooms];

            // Case fresh chat app, just add the new chatroom(s)
            if (oldChatRooms.length === 0) {
                return [...addingChatRooms];
            }

            // Case existing chats, only add if new - I guess error if dupe?
            let newChatRooms = [...oldChatRooms];
            addingChatRooms.forEach(addingChatRoom => {
                oldChatRooms.forEach(oldChatRoom => {
                    if (addingChatRoom.id !== oldChatRoom.id) {
                        newChatRooms = [...newChatRooms, addingChatRoom];
                    } else {
                        //? - error or replace users and messages state?
                    }
                })
            })

            return newChatRooms;
        case CHAT_ROOM_API_ERROR:
            return payload;
        default:
            return oldChatRooms;
    }
}

const chatApp = combineReducers({
    chatIdActive: chatIdActivateReducer,
    chatDetails: chatDetailsReducer,
    chatRooms: chatRoomsReducer
});

export { chatApp };
