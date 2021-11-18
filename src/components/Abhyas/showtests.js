import Test from "./testitem";
import { useEffect, useState } from "react";
import { useUser } from "../../../firebase/useUser";
import firebase from "@firebase/app-compat";
const ShowTests = (props) => {
    const { user } = useUser();
    const [testResults, settestResults] = useState([])
    const showTests = props.tests.map((test,index) => {
        const results = testResults.find((result) => result.tid === test.tid)
        if(!props.isActive && !!results){


            return < Test index={index+1} results={results } key={`${test.tid}`} {...test} />
        }
        else if(props.isActive && !results){
            return < Test index={index+1} results={null } key={`${test.tid}`} {...test} />
        
        }
        else{
            return;
        }
    }).filter(Boolean)
    useEffect(async () => {
        if (!!user) {
            // const userResult = await (await firebase.firestore().collection('userTests').doc(user.tid).get()).data()
            try {
                const docRef = firebase.firestore().collection('userTests').doc(user.id)
                docRef.get().then(async (doc) => {
                    if (!doc.exists) {
                        docRef.set({ tests: [] })

                    }
                })

                docRef.onSnapshot(function (doc) {
                        settestResults(doc.data().tests)
                    })
            } catch (error) {
                console.log(error)
            }
        }

    }, [user])


    return (
        <div className="flex flex-col ">
            {showTests.length===0 ? <p className="text-center text-gray-600  m-2 p-2"> No tests available :( </p> : showTests }

        </div>
    );
}
export default ShowTests;