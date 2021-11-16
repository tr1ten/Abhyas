import firebase from 'firebase/compat/app'
// the below imports are option - comment out what you don't need
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
import 'firebase/compat/analytics'
import 'firebase/compat/performance'
const clientCredentials = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
};

export default function initFirebase() {
    if (!firebase.apps.length) {
        firebase.initializeApp(clientCredentials)
        // Check that `window` is in scope for the analytics module!
        if (typeof window !== 'undefined') {
            // Enable analytics. https://firebase.google.com/docs/analytics/get-started
            if ('measurementId' in clientCredentials) {
                firebase.analytics()
                firebase.performance()
            }
        }
        console.log('Firebase was successfully init.')
    }
}