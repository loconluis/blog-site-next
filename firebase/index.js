import * as firebase from 'firebase'
import config from './config'
// initializate firebase 
// firebase.initializeApp(config)
// initializate firebase database
// const database = firebase.database()
export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

// export { firebase, database as default }