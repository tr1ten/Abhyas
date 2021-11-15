import THeader from "../../../../../../components/Test/header";
import { useSelector } from "react-redux";
import QuesCard from "../../../../../../components/Test/question";
import { useReducer, useState } from "react";
import DisplayQues from "../../../../../../components/Test/displayques";
import { getSubjectKey, getSummary, getResults } from "../../../../../../utils/test";
import ChooseAnswer from "../../../../../../components/Test/chooseans";
import MModal from "../../../../../../components/UI/modal";
import ShowSummary from "../../../../../../components/Test/summary";
import { useRouter } from 'next/router';
import { useDispatch } from "react-redux";
import { testActions } from "../../../../../../store/test";
const userInitialState = {
    qid: 'p01',
    selectedAnswer: null,
    markForReview: false,
    userRecord: [],
    summary: null,
    finalScore: 0,
    analytics: null,

}
const TestPage = (props) => {
    const Ledispatch = useDispatch()
    const router = useRouter();
    const { tid ,asPath} = router.query;
    if (!tid) {
        return null
    }
    console.log('tid now ', tid, router.query)
    const testitem = tid && useSelector(state => state.mock.tests.find((test) => test.tid === tid))
    console.log('renfering after  ', testitem ,router)
    const userReducer = (state, action) => {
        switch (action.type) {
            case 'MFR':
                return { ...state, markForReview: !state.markForReview }
            case 'SAVE':
                return { ...state, selectedAnswer: action.answer }
            case 'NEXT':
                const val = parseInt(state.qid.slice(1))
                const padme = val >= 9 ? '' : '0'
                const nextId = (val >= testitem[`${state.qid.slice(0, 1)}ques`]) ? state.qid.slice(0, 1) + '01' : state.qid.slice(0, 1) + padme + (val + 1).toString()
                const oldRecord = state.userRecord.find((record) => record.qid === nextId)
                if (oldRecord) {
                    return { ...oldRecord, userRecord: state.userRecord }
                }
                return { ...userInitialState, qid: nextId, userRecord: state.userRecord }
            case 'PREV': {
                const val = parseInt(state.qid.slice(1))
                const padme = val > 10 ? '' : '0'
                const prevId = (val <= 1) ? state.qid.slice(0, 1) + '01' : state.qid.slice(0, 1) + padme + (val - 1).toString()
                const oldRecord = state.userRecord.find((record) => record.qid === prevId)
                if (oldRecord) {
                    return { ...oldRecord, userRecord: state.userRecord }
                }
                return { ...userInitialState, qid: prevId, userRecord: state.userRecord }


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
                const newRecords = state.userRecord.filter((record) => record.qid !== state.qid)

                return { ...userInitialState, qid: state.qid, userRecord: newRecords }


            }
            case 'SUMMARY': {
                return { ...state, summary: getSummary(state.userRecord, testitem.totalQues) }

            }
            default:
                throw new Error('No reducer case matched!');
        }

    }
    const [user, dispatch] = useReducer(userReducer, userInitialState)

    const getQues = (qid) => {
        const key = getSubjectKey(qid);
        return testitem[key].find((ques) => ques.id === qid)
    }
    const quesItem = tid && getQues(user.qid);
    const quesChangeHandler = (qid) => {
        dispatch({ type: 'RESET' })
        dispatch({ type: 'UQID', qid })
    }
    const [isModalOpen, setisModalOpen] = useState(false)
    const [isTimeOut, setisTimeOut] = useState(false)

    function openModal() {

        setisModalOpen(true);
    }
    function closeModal() {
        setisModalOpen(false);


    }
    const onSubmitHandler = (isTimeout = false) => {
        dispatch({ type: 'RESET' })
        dispatch({ type: 'SUMMARY' })
        setisTimeOut(isTimeOut)
        openModal()

    }
    const onFinishTestHandler = () => {
        Ledispatch(testActions.updateResult(getResults(user.userRecord, testitem) ))
        router.push(`${router.asPath}/result`)
    }
    return (
        <>
            <MModal title={isTimeOut ? 'Uh Oh Times-up!' : 'Summary'} onClickHandler={onFinishTestHandler} btntxt="Submit" openModal={isModalOpen} onClose={isTimeOut ? null : closeModal}>
                {user.summary && <ShowSummary summary={user.summary} />}
            </MModal>
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

                    }} onClearHandler={() => dispatch({ type: 'CLEAR' })} />
                </div>
                <DisplayQues userRecord={user.userRecord} quesChangeHandler={quesChangeHandler} testitem={testitem} qid={user.qid} />
            </div>
        </>

    );
}
export default TestPage;