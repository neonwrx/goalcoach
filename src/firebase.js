import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDWsSoe1di29k7ANXginxs3e1JjTmu_ADs",
    authDomain: "goalcoach-68002.firebaseapp.com",
    databaseURL: "https://goalcoach-68002.firebaseio.com",
    projectId: "goalcoach-68002",
    storageBucket: "",
    messagingSenderId: "1055647528147"
  };

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
