import React from 'react';
import icon from '../../assets/img/Vector.svg'
import './styles.css'

function NotificationButton() {
    return (
        <div className="dsmeta-red-btn">
            <img src={icon} alt="Deu ruim" />
        </div>
    )
}

export default NotificationButton;
