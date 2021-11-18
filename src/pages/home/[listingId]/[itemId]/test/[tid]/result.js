import Header from "../../../../../../components/Abhyas/header";
import { useSelector } from "react-redux";
import { useUser } from "../../../../../../../firebase/useUser";
import { useEffect } from "react";
import firebase from "@firebase/app-compat";
const ResultPage = () => {
    const result = useSelector(state => state.test.result)
    const { user } = useUser();

    useEffect(async () => {
        if (!!user && result.tid) {
            await firebase.firestore().collection('userTests').doc(user.id).update({
                tests: firebase.firestore.FieldValue.arrayUnion(result)
            });
            // await firebase.firestore().collection('userTests').doc(user.id).set(result)
        }
    }, [user])
    return (!result ? null :
        <><Header />
            <div className="w-full flex">
                <div className='w-full p-1 bg-red-600 text-white'>Marks:{result.userMarks}/{result.totalMarks}</div>
                <div className='w-full p-1 bg-red-400 text-white'>Percentage:{parseInt((result.userMarks / result.totalMarks).toFixed(2) * 100)}%</div>

            </div></>

    );
}
export default ResultPage;