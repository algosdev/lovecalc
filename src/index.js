import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import rootReducer from './store/Reducers'
import * as firebase from "firebase/app"
import 'firebase/firestore';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCSH4n9Ur6p9VNqmRvD4yg6Ys-Qwd5qnUw",
  authDomain: "lovecalc-6d973.firebaseapp.com",
  databaseURL: "https://lovecalc-6d973.firebaseio.com",
  projectId: "lovecalc-6d973",
  storageBucket: "lovecalc-6d973.appspot.com",
  messagingSenderId: "269895813292",
  appId: "1:269895813292:web:97c256d9417f26500c3709",
  measurementId: "G-G7EMB2FMNB"
}
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}
firebase.initializeApp(firebaseConfig);
firebase.firestore();
const store = createStore(rootReducer,
  compose(applyMiddleware(thunk.withExtraArgument({ getFirestore })),
    reduxFirestore(firebaseConfig)),
)
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}
ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
