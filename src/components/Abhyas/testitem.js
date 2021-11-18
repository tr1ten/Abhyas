import Button from "../UI/button";
import MModal from "../UI/modal";
import { useState,useEffect } from "react";
import  {useRouter} from 'next/router';
import { testActions } from "../../store/test";
import { useDispatch } from "react-redux";
const Test = (props) => {
    const router = useRouter();
    const showSummary = props.results ? true : false
    const [modalIsOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch()
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    const [modal2IsOpen, set2IsOpen] = useState(false);
    function openModal2() {
        setIsOpen(false);
        set2IsOpen(true);
    }
    function closeModal2() {
        set2IsOpen(false);
    }
    function startTest() {
        set2IsOpen(false);
        setIsOpen(false);
        router.push(`${router.asPath}/test/${props.tid}`)

        return;
    }
    const  onResultHandler=()=>{
        dispatch(testActions.updateResult(props.results))
        router.push(`${router.asPath}/test/${props.results.tid}/result`)

    }
    return (
        <>
            <MModal title="Do's and Don'ts" onClickHandler={openModal2} btntxt="Continue" openModal={modalIsOpen} onClose={closeModal}>
                <div className="p-2 m-2">
                    <h2 className="font-bold text-xl ">Do's</h2>
                    <h3 className="font-semibold m-1">GENERAL GUIDELINES</h3>
                    <ul className="list-disc text-sm">
                        <li>Make Sure Battery stuff</li>
                        <li>Make Sure to make sure</li>


                    </ul>
                    <h3 className="font-semibold m-1">While taking test</h3>
                    <ul className="list-disc text-sm">
                        <li>Begin with your strongest part that is start with chemistry :)</li>
                        <li>Go through the entire paper,attempt the question you know first </li>
                        <li>atleast 20-30 min for revision (It help really  :,) </li>


                    </ul>
                    <h2 className="font-bold text-xl ">Don'ts</h2>
                    <h3 className="font-semibold m-1">GENERAL GUIDELINES</h3>
                    <ul className="list-disc text-sm">
                        <li>Don't Cheat pwease := </li>


                    </ul>

                </div>

            </MModal>
            <MModal title='Instructions' onClickHandler={startTest} btntxt="I AM READY TO BEGIN!" openModal={modal2IsOpen} onClose={closeModal2}>
                <div className="p-2 m-2 ">
                    <ul className="list-disc text-sm">
                        <li>Total duration of this test is <span className='font-semibold'>{"180 minutes"}.</span></li>
                        <li>There will be only(?) <span className='font-semibold'>{"75 questions"}</span> in this test.</li>
                        <li>There will be 3 section Physics,Chemistry,Maths each having  <span className='font-semibold'>{"25 questions"}</span>.</li>
                        <li>All are <span className='font-semibold'>Single Choice Type</span>  question.</li>
                        <li>Marking Scheme would be <span className='font-semibold'>-1 for Incorrect</span>  response and  <span className='font-semibold'>4 for correct</span>.</li>

                    </ul>

                    <p className="my-2">
                        Etcetera..
                        Good Luck!
                    </p>
                </div>
            </MModal>


            <div className="flex justify-between shadow-lg p-2 m-2 items-center">
                <div className="rounded-full ">
                    <p>Sno.{props.index}</p>
                </div>
                <h3>{props.title}</h3>
                <Button onClick={ showSummary? onResultHandler: openModal } className=" bg-secondary m-1 text-white hover:text-gray-200">
                    {showSummary?"Summary" : "Start"} 
                </Button>

            </div></>
    );
}
export default Test;