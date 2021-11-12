import THeader from "../components/Test/header";
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import QuesCard from "../components/Test/question";
import { useReducer } from "react";
import DisplayQues from "../components/Test/displayques";
import { getSubjectKey, getSummary } from "../utils/test";
import ChooseAnswer from "../components/Test/chooseans";
const userInitialState = {
    qid: 'p01',
    selectedAnswer: null,
    markForReview: false,
    userRecord: [],

}
const TestPage = (props) => {
    const params = useParams()
    const { tid } = params;
    const testitem = useSelector(state => state.mock.tests.find((test) => test.tid === parseInt(tid)))
    // const [currentQues, setcurrentQues] = useState('p01')
    const userReducer = (state, action) => {
        switch (action.type) {
            case 'MFR':
                return { ...state, markForReview: !state.markForReview }
            case 'SAVE':
                return { ...state, selectedAnswer: action.answer }
            case 'NEXT':
                const nextId = (parseInt(state.qid.slice(1)) >= testitem[`${state.qid.slice(0, 1)}ques`]) ? state.qid.slice(0, 1) + '01' : state.qid.slice(0, 1) + '0' + (parseInt(state.qid.slice(1)) + 1).toString()
                const oldRecord = state.userRecord.find((record) => record.qid === nextId)
                if (oldRecord) {
                    return { ...oldRecord, userRecord: state.userRecord }
                }
                return { ...userInitialState, qid: nextId, userRecord: state.userRecord }
            case 'PREV': {
                const prevId = (parseInt(state.qid.slice(1)) <= 1) ? state.qid.slice(0, 1) + '01' : state.qid.slice(0, 1) + '0' + (parseInt(state.qid.slice(1)) - 1).toString()
                const oldRecord = state.userRecord.find((record) => record.qid === prevId)
                if (oldRecord) {
                    return { ...oldRecord, userRecord: state.userRecord }
                }
                return { ...userInitialState, qid: nextId, userRecord: state.userRecord }


            }
            case 'UQID': {
                let oldRecord = state.userRecord.find((record) => record.qid === action.qid)
                if (!oldRecord) {
                    oldRecord = { qid: action.qid, markForReview: false, selectedAnswer: null }
                }
                return { ...oldRecord, qid: action.qid, userRecord: state.userRecord }
            }
            case 'RESET': {
                const oldRecord = state.userRecord.find((record) => record.qid === state.qid)
                if (oldRecord) {
                    const newUserRecord = state.userRecord.map((record) => {
                        if (record.qid === state.qid) {

                            return { qid: state.qid, markForReview: state.markForReview, selectedAnswer: state.selectedAnswer }
                        }
                        return { ...record }
                    })
                    return { ...oldRecord, userRecord: newUserRecord }
                }
                return { ...userInitialState, qid: state.qid, userRecord: [...state.userRecord, { qid: state.qid, selectedAnswer: state.selectedAnswer, markForReview: state.markForReview }] }
            }
            case 'CLEAR': {
                const oldRecord = state.userRecord.find((record) => record.qid === state.qid)
                if (oldRecord) {
                    return { ...oldRecord, userRecord: state.userRecord }
                }
                return { ...userInitialState, qid: state.qid, userRecord: [...state.userRecord, { qid: state.qid, selectedAnswer: state.selectedAnswer, markForReview: state.markForReview }] }


            }
            default:
                throw new Error('No reducer case matched!');
        }

    }
    const [user, dispatch] = useReducer(userReducer, userInitialState)
    console.log('Current state ', user)

    const getQues = (qid) => {
        const key = getSubjectKey(qid);
        return testitem[key].find((ques) => ques.id === qid)
    }
    const quesItem = getQues(user.qid);
    const quesChangeHandler = (qid) => {
        dispatch({ type: 'RESET' })
        dispatch({ type: 'UQID', qid })
    }
    const onSubmitHandler = (isTimeout = false) => {
        dispatch({type:'RESET'})
        console.log('Your Test Summary ', getSummary(user.userRecord, testitem.totalQues))

    }
    return (
        <>
            <THeader onSubmitHandler={onSubmitHandler} duration={testitem.duration} title={testitem.title} />
            <div className="flex flex-col sm:flex-row  items-center">
                <div>
                    <QuesCard selectedAnswer={user.selectedAnswer} onSelectAnswer={(choice) => dispatch({ type: 'SAVE', answer: choice })}  {...quesItem} />
                    <ChooseAnswer isCheck={user.markForReview} onMFRHandler={() => dispatch({ type: 'MFR' })} onNextHandler={() => {
                        dispatch({ type: 'RESET' })
                        dispatch({ type: 'NEXT' })

                    }} onPrevHandler={() => {
                        dispatch({ type: 'RESET' })
                        dispatch({ type: 'PREV' })

                    }} />
                </div>
                <DisplayQues userRecord={user.userRecord} quesChangeHandler={quesChangeHandler} testitem={testitem} qid={user.qid} />
            </div>
        </>
    );
}
export default TestPage;