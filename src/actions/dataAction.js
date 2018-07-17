import { FETCH_PATROLS } from './types';

import { patrolsRef, homesRef } from '../firebase';

export const fetchPatrols = () => async dispatch => {
    patrolsRef.limitToLast(10).on("child_added", snapshot => {
        const singlePatrol = snapshot.val();
        if (singlePatrol == null) {
            return false;
        }
        homesRef.child(singlePatrol.homeId).once('value', snap => {
            const singleHome = snap.val();
            const payload = {
                address: singleHome.address,
                status: singlePatrol.status,
                timestamp: singlePatrol.timestamp,
                key: snapshot.key
            }
            dispatch({
                type: FETCH_PATROLS,
                payload: payload
            });
        });
    });
}

export const fetchHomes = () => { }