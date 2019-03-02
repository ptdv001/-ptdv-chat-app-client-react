import React from 'react';
import { connect } from 'react-redux';
import ChatLog from './chat-log'

function ChatRoom(props) {
    return (
        <div className={props.chatIdActive === props.chatId ? 'chatRoom chatRoom-visible' : 'chatRoom'}>
            CHAT ROOM (ChatId: {props.chatId}, Active Id: {props.chatIdActive}) <br />
            <ChatLog
                chatId={props.chatId}
                messages={props.chatRoom.messages} />
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        chatIdActive: state.chatApp.chatIdActive
    };
}

export default connect(mapStateToProps)(ChatRoom);
