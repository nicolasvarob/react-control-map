import React from 'react';

const listItem = (props) => {
    return (
        <li>{props.address} y {props.timestamp}</li>
    );
};

export default listItem;