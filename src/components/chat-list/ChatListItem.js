import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { chatIdActiveUpdate } from '../../actions';

// Why go functional component?
// + stateless so can't accidentally add state
// plus more..

class ChatListItem extends React.Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        console.log('should dispatch chatIdActiveUpdate chatId=', this.props.chatId);
        this.props.dispatch(chatIdActiveUpdate(this.props.chatId));
        // chatIdActiveUpdate(this.props.chatId);
    }

    render() {
        return (
            <div className={this.props.chatId === this.props.chatIdActive ? 'chatHeader-nav-selected' : ''}>
                <button onClick={this.onClick}>{this.props.name}</button>
            </div>
        )
    }
}

ChatListItem.propTypes = {
    // onClick: PropTypes.func.isRequired,
    chatId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
}

const mapStateToProps = (state, props) => {
    // console.log('ChatListItem state.chatApp=', state.chatApp);
    return {
        chatIdActive: state.chatApp.chatIdActive
    }
};

// const mapActionsToProps = (state, props) => {
//     return bindActionCreators({
//         onClick: chatIdActiveUpdate
//     }, state.dispatch)
// }
//
// export default connect(state => ({
//     chatId: state.chatId
// }))(ChatListItem)
//
// export default connect(state => ({}), mapActionsToProps)(ChatListItem)
//

export default connect(mapStateToProps)(ChatListItem)
