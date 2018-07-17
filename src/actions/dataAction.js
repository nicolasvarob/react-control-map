import { FETCH_PATROLS } from './types';

import { patrolsRef, homesRef } from '../firebase';

export const fetchPatrols = () => async dispatch => {
    patrolsRef.limitToLast(10).on("value", snapshot => {
        if (snapshot.val() == null) {
            return false;
        }
        snapshot.forEach(patrol => {
            const singlePatrol = patrol.val();
            homesRef.child(singlePatrol.homeId).once('value', snap => {
                const singleHome = snap.val();
                const payload = {
                    address: singleHome.address,
                    status: singlePatrol.status,
                    timestamp: singlePatrol.timestamp,
                    key: patrol.key
                }
                dispatch({
                    type: FETCH_PATROLS,
                    payload: payload
                });
            });
        });
    });
}

export const fetchHomes = () => {}