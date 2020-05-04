import React from 'react';
import ReactEmoji from 'react-emoji';
import './message.css';


const Message = ({ message: { user, text }, name }) => {
    let isSendByCurrentUser = false;
    const trimmedName = name.trim().toLowerCase();


    if (trimmedName === user) {
        isSendByCurrentUser = true;
    }
    return (
        isSendByCurrentUser ?
            (
                <div className={'messageContainer justifyStart'}>
                    <p className={'sendText pr-10 m-0'}>{trimmedName}</p>
                    <div className={"messageBox backgroundBlue"}>
                        <p className={"messageText colorWhite m-0"}>{ReactEmoji.emojify(text)}</p>
                    </div>
                </div>
            )
            :
            (
                <div className={'messageContainer justifyEnd'}>
                    <div className={"messageBox backgroundLight"}>
                        <p className={"messageText colorDark m-0"}>{ReactEmoji.emojify(text)}</p>
                    </div>
                    <p className={'sendText pl-10 m-0'}>{user}</p>
                </div>
            )
    )
}

export default Message;