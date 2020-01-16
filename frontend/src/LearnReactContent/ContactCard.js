import React from 'react';

function ContactCard(props) {

    return (
        <div>
            <h2>{props.title}</h2>
            <p style={{display: props.body ? "block" : "none"}}>{props.body}</p>
            <button>{props.button}</button>
        </div>
    );
}

export default ContactCard;
