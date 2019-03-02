// TODO
// - Reselector, come back to

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createSelector } from 'reselect';
import {
    chatIdActiveUpdate,
    chatDetailAddApi,
    chatRoomAddApi
} from '../actions';
import { ChatList } from '../components/chat-list/ChatList';
import ChatRooms from '../components/chat-room/chat-rooms'

class ChatScreen extends React.Component {
    constructor(props) {
        super(props);
        // console.log('Router data ', props);
    }

    componentDidMount() {
        this.props.onChatDetailAddApi();
        this.props.onChatRoomAddApi('/data-mocks/project-data-chatRoom1.json');
        setTimeout(() => this.props.onChatRoomAddApi('/data-mocks/project-data-chatRoom2.json'), 1000);
        // setTimeout(() => this.props.onChatRoomAddApi('/data-mocks/project-data-chatRoom3.json'), 2000);
    }

    render() {
        console.log('Chat.js state.chatApp=', this.props);
        return (
            <div>
                {/* CHAT COMPONENT, Chat Id Active: {this.props.chatIdActive} <br /> */}
                <div className="chatScreen">
                    <ChatList chatDetails={this.props.chatDetails} />
                    <ChatRooms chatRooms={this.props.chatRooms} />
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state, props) => {
    console.log('Chat.js state.chatApp=', state.chatApp);
    return {
        chatIdActive: state.chatApp.chatIdActive
    }
};

const mapActionsToProps = {
    onChatIdActiveUpdate: chatIdActiveUpdate,
    // onChatDetailAdd: chatDetailAdd,
    onChatDetailAddApi: chatDetailAddApi,
    onChatRoomAddApi: chatRoomAddApi
};
/*
-or to use with passed in props
const mapActionsToProps = (state, props) => {
    return bindActionCreators({
        onChatIdActiveUpdate: chatIdActiveUpdate,
        onChatDetailAdd: chatDetailAdd
    }, dispatch);
};
*/

// Just a How To here
// const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
//     console.log('mergeProps', propsFromState, propsFromDispatch, ownProps);
//     return {};
// };

export default withRouter(connect(
    mapStateToProps,
    mapActionsToProps,
    // mergeProps - Just a How To here
)(ChatScreen));
