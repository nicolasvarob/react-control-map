import React, { Component } from 'react';
import firebase from '../../../../firebase';
import ListItem from './ListItem';

class ListItems extends Component {

    state = {
        items: []
    }

    componentDidMount() {
        //Firebase sacar valores de homes
        const database = firebase.database();
        const patrolsRef = database.ref('patrols');
        patrolsRef.orderByKey().limitToLast(10).on('value', this.patrolReport, errData);
        function errData(err) {
            console.log('Error');
            console.log(err);
        }

    }

    patrolReport = (snapshot) => {
        const patrols = snapshot.val();
        if (patrols == null) {
            return false;
        }
        const database = firebase.database();
        const homesRef = database.ref('homes');
        snapshot.forEach(patrol => {
            const singlePatrol = patrol.val();
            homesRef.child(singlePatrol.homeId).once('value', snap => {
                const homeSingle = snap.val();
                const address = homeSingle.address;
                const status = singlePatrol.status;
                const timestamp = singlePatrol.timestamp;
                const patrolInfo = { address: address, status: status, timestamp: timestamp, key: patrol.key }
                console.log(patrolInfo);
                this.setState((prevState) => {
                    return {
                        items: [...prevState.items, patrolInfo]
                    }
                });
            }, errData);
        });
        function errData(err) {
            console.log('Error');
            console.log(err);
        }
    }

    render() {
        const itemList = this.state.items.map(item => {
            return <ListItem key={item.key} address={item.address} timestamp={item.timestamp} status={item.status} />
        });
        return (
            <div>
                <ul>
                    <li><h2>Título</h2></li>
                </ul>
                <ul>
                    {itemList}
                </ul>
            </div>
        );
    }
}

export default ListItems;