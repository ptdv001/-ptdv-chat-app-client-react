import React from 'react';
import { connect } from 'react-redux';
import { ChatListLog } from './ChatListLog';

function ChatList(props) {
    return (
        <div className="ChatList">
            <ChatListLog chatDetails={props.chatDetails} />
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        chatDetails: state.chatApp.chatDetails,
        chatIdActive: state.chatApp.chatIdActive
    };
}

ChatList = connect(mapStateToProps)(ChatList);

export { ChatList };
