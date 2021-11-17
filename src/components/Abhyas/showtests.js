import Test from "./testitem";
import { useEffect, useState } from "react";
import { useUser } from "../../../firebase/useUser";
import firebase from "@firebase/app-compat";
const ShowTests = (props) => {
    const { user } = useUser();
    const [testResults, settestResults] = useState([])

    useEffect(async () => {
        if (!!user) {
            // const userResult = await (await firebase.firestore().collection('userTests').doc(user.tid).get()).data()
            try {
                firebase
                    .firestore()
                    .collection('userTests')
                    .doc(user.id)
                    .onSnapshot(function (doc) {
                        console.log('got data ', doc.data().tests)
                        settestResults(doc.data().tests)
                    })
            } catch (error) {
                console.log(error)
            }
        }

    }, [user])



    return (
        <div className="flex flex-col ">
            {props.tests.map((test) => {
                const results = testResults.find((result) => result.tid === test.tid)

                return    < Test results={results} key = {`${test.tid}`} { ...test } />
            })}

        </div>
    );
}
export default ShowTests;