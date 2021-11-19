import firebase from 'firebase/compat/app'
// the below imports are option - comment out what you don't need
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
import 'firebase/compat/analytics'
import 'firebase/compat/performance'
const clientCredentials = {
    apiKey: process.env.NEXT_PUBLIC_apiKey,
    authDomain: process.env.NEXT_PUBLIC_authDomain,
    projectId: process.env.NEXT_PUBLIC_projectId,
    storageBucket: process.env.NEXT_PUBLIC_storageBucket,
    messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
    appId: process.env.NEXT_PUBLIC_appId,
};

export default function initFirebase() {
    if (firebase.apps.length===0) {
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
    else{
        console.log('already init')
    }
}