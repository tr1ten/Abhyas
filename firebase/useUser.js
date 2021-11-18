import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import 'firebase/compat/auth'
import {
    removeUserCookie,
    setUserCookie,
    getUserFromCookie,
} from './userCookies'
import { mapUserData } from './mapUserData'
import firebase from 'firebase/compat/app'
import initFirebase from './initfirebase';
initFirebase()

const useUser = () => {
    const [user, setUser] = useState()
    const router = useRouter()

    const logout = async () => {
        return firebase
            .auth()
            .signOut()
            .then(() => {
                // Sign-out successful.
                router.push('/home')
            })
            .catch((e) => {
                console.error(e)
            })
    }

    useEffect(() => {
        // Firebase updates the id token every hour, this
        // makes sure the react state and the cookie are
        // both kept up to date
        const cancelAuthListener = firebase.auth().onAuthStateChanged((user) => {
            // console.log('user setting in useUser hook',user)
            if (user) {
                const userData = mapUserData(user)
                setUserCookie(userData)
                setUser(userData)
            } else {
                removeUserCookie()
                setUser()
            }
        })

        const userFromCookie = getUserFromCookie()
        if (!userFromCookie) {
            // console.log('pushing back home if not cookie found', userFromCookie)
            // router.push('/auth/login')
            return
        }
        if(!user){
            // console.log('userset in from coookie',user)
            setUser(userFromCookie)
        }

        return () => {
            cancelAuthListener()
        }
    }, [])

    return { user, logout }
}

export { useUser }
