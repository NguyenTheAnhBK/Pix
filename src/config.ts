import firebase from '@react-native-firebase/app';

export const firebaseConfig: any = {
  clientId:
    '472804413333-1sfejb0pi6b93v27uj1ubm23cl8e4cqs.apps.googleusercontent.com',
  appId: '1:472804413333:android:f2387c16e7833260c1709c',
  apiKey: 'AIzaSyBs34zHhpBvMYGStYFq27xamn_RvbgJFUM',
  databaseURL: '',
  storageBucket: 'pixel-5ad1d.appspot.com',
  messagingSenderId: '472804413333',
  projectId: 'pixel-5ad1d'
};

const config = {
  name: 'SECONDARY_APP'
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig, config);
}
