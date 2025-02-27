import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import {getAuth, signInAnonymously, onAuthStateChanged} from "firebase/auth"

const firebaseConfig = {
    apiKey: 'AIzaSyCVTt7Ot26-3NBK794X_PHzzytsLfWwMBw',
    authDomain: 'oo-ee-aa-machine.firebaseapp.com',
    projectId: 'oo-ee-aa-machine',
    storageBucket: 'oo-ee-aa-machine.firebasestorage.app',
    messagingSenderId: '765767848761',
    appId: '1:765767848761:web:061ced3252cab182518ee8',
    measurementId: 'G-8P42J8TYMT'
  }

  const app = initializeApp(firebaseConfig)
  const analytics = getAnalytics(app)
  const auth = getAuth(app);

export {app, auth, signInAnonymously, onAuthStateChanged}