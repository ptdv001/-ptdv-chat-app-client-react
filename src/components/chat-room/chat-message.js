import React from 'react'
import PropTypes from 'prop-types'

export default function ChatMessage(props) {
    return (
        <div>
            <span>{props.username}</span>:
            <span>{props.message}</span>
            <span>({props.timestamp})</span>
        </div>
    )
}

ChatMessage.propTypes = {
    messageId: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    timestamp: PropTypes.string
}
