import React from 'react';
import { connect } from 'react-redux';
import ChatRoom from './chat-room'

function ChatRooms(props) {
    console.log('ChatRooms', props.chatRooms);

    return (
        <div>
            {props.chatRooms.map(chatRoom => (
                <ChatRoom
                    key={chatRoom.id}
                    chatId={chatRoom.id}
                    chatRoom={chatRoom} />
            ))}
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        chatRooms: state.chatApp.chatRooms
    };
}

export default connect(mapStateToProps)(ChatRooms);
