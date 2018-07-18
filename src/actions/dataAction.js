import { FETCH_PATROLS, FETCH_HOME_PATROLS } from './types';

import { patrolsRef, homesRef } from '../firebase';

export const fetchPatrols = () => async (dispatch) => {
    patrolsRef.limitToLast(10).on('child_added', snapshot => {
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

export const fetchHomePatrols = (homeId) => async dispatch => {
    homesRef.child(homeId + '/patrols').orderByKey().limitToLast(10).on('child_added', snapshot => {
        if (snapshot.val() == null) {
            return 'no hay patrullas';
        }
        snapshot.forEach(childSnapshot => {
            const patrolId = childSnapshot.val();
            patrolsRef.child(patrolId).once('value', snap => {
                const singlePatrol = snap.val();
                const payload = {
                    status: singlePatrol.status,
                    timestamp: singlePatrol.timestamp,
                    key: patrolId.key
                }
                dispatch({
                    type: FETCH_HOME_PATROLS,
                    payload: payload
                });
            });
        });
    })

}