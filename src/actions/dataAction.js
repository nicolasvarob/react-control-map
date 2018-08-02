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

//TODO
//Finalizar eventos para fetch home patrols
export const fetchHomePatrols = (homeId) => async (dispatch) => {
    homesRef.child(homeId + '/patrols').orderByKey().limitToLast(10).on('value', snapshot => {
        if (snapshot.val() == null || snapshot.val() === 'undefined') {
            return console.log('no hay patrullas');
        }
        snapshot.forEach(childSnapshot => {
            const patrolId = childSnapshot.val();
            patrolsRef.child(patrolId).once('value', snap => {
                if (snap.val() == null) {
                    return console.log('patrulla no existe');
                }
                const singlePatrol = snap.val();
                const payload = {
                    status: singlePatrol.status,
                    timestamp: singlePatrol.timestamp,
                    key: patrolId,
                };
                dispatch({
                    type: FETCH_HOME_PATROLS,
                    payload: payload,
                    id: homeId
                });
            });
        });
    }, err => console.log(err));
}

