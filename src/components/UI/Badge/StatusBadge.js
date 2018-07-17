import React from 'react';

const statusBadge = (props) => {
    let badgeText;
    let badgeClass;
    if (props.status === "actividad"){
        badgeText = 'ok';
        badgeClass = 'badge-success';
    } else{
        badgeText = 'nok';
        badgeClass = 'badge-danger';
    }
    return (
        <span className={'badge ' + badgeClass}>{badgeText}</span>
    );
};

export default statusBadge;