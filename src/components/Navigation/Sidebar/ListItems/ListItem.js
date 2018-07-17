import React from 'react';
import { theTime, shortDate } from '../../../../helpers/timeformater';
import StatusBadge from '../../../UI/Badge/StatusBadge';

import './ListItem.css';

const listItem = (props) => {

    return (
        <li>
            <div className="holder">
                <div className="holder-header">
                    {props.address} <StatusBadge status={props.status}/>
                </div>
                <div className="holder-body">
                    {theTime(props.timestamp)} | {shortDate(props.timestamp)}
                </div>
            </div>
        </li>
    );
};

export default listItem;