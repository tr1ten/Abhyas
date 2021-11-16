import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import 'firebase/compat/auth'
import {
    removeUserCookie,
    setUserCookie,
    getUserFromCookie,
} from './userCookies'
import { mapUserData } from './mapUserData'
import  firebase from 'firebase/compat/app'
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
                router.push('/auth')
            })
            .catch((e) => {
                console.error(e)
            })
    }

    useEffect(() => {
        // Firebase updates the id token every hour, this
        // makes sure the react state and the cookie are
        // both kept up to date
        const cancelAuthListener = firebase.auth().onIdTokenChanged((user) => {
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
            router.push('/')
            return
        }
        setUser(userFromCookie)

        return () => {
            cancelAuthListener()
        }
    }, [])

    return { user, logout }
}

export { useUser }
