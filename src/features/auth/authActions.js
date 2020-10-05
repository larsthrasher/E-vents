import { SIGN_IN_USER, SIGN_OUT_USER } from './authConstants';
import {APP_LOADED} from '../../app/async/asyncReducer';
import firebase from '../../app/config/firebase';
import { getUserProfile } from '../../app/firestore/firestoreService.js';
import { listenToCurrentUserProfile } from '../../features/profiles/profileActions';
import { dataFromSnapshot } from '../../app/firestore/firestoreService';


export function signInUser(user) {
      return {
        type: SIGN_IN_USER,
        payload: user
      }
    }


export function verifyAuth(){
  return function (dispatch) {
      return firebase.auth().onAuthStateChanged(user => {
        if (user) {
          dispatch(signInUser(user));
          const profileRef = getUserProfile(user.uid)
          profileRef.onSnapshot(snapshot => {
            dispatch(listenToCurrentUserProfile(dataFromSnapshot(snapshot)));
            dispatch({type: APP_LOADED})
          })
        } else {
          dispatch (signOutUser())
          dispatch({type: APP_LOADED})
        }
      })
  }
}

export function signOutUser() {
  return {
    type: SIGN_OUT_USER
  }
}
