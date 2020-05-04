import React from 'react';

import './infoBar.css'

const InfoBar = ({ room }) => {
    return (
        <div className={'infoBar'}>
            <div className="leftInnerContainer">
                <h2>{room}</h2>
            </div>
            <div className="rightInnerContainer">
                <a href="/">Leave Chat</a>
            </div>
        </div>
    )
}

export default InfoBar;