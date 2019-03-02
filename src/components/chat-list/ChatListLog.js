import React from 'react';
import ChatListItem from './ChatListItem';

function ChatListLog(props) {
    return (
        <div>
            {props.chatDetails.map(chat => (
                <ChatListItem
                    key={chat.id}
                    chatId={chat.id}
                    name={chat.name}
                    timestamp={chat.timestamp} />
            ))}
        </div>
    );
}

export { ChatListLog };
