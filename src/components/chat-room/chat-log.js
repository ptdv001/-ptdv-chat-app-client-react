import React from 'react'
import PropTypes from 'prop-types'
import ChatMessage from './chat-message'

export default function ChatLog(props) {
    return (
        <div>
            Chat Log (ID: {props.chatId})
            <ol>
                {props.messages.map(message => (
                    <li key={message.id}>
                        <ChatMessage
                            messageId={message.id}
                            username={message.username}
                            message={message.message}
                            timestamp={message.timestamp} />
                    </li>
                ))}
            </ol>
        </div>
    )
}

ChatLog.propTypes = {
    chatId: PropTypes.number.isRequired,
    messages: PropTypes.array.isRequired
}
