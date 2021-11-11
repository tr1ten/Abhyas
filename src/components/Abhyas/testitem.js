import Button from "../UI/button";
import MModal from "../UI/modal";
import { useState } from "react";
import { useNavigate } from "react-router";
const Test = (props) => {
    const navigate = useNavigate();
    const [modalIsOpen, setIsOpen] = useState(false);
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
    function startTest(){
        set2IsOpen(false);
        setIsOpen(false);
        navigate(`test${props.tid}/start`)

        return;
    }
    return (
        <>
            <MModal title="Do's and Don'ts" onClickHandler={openModal2} btntxt="Continue" openModal={modalIsOpen} onClose={closeModal}>
                <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique esse, eos iure facere voluptatibus consequatur voluptas! Maiores optio eum officiis laborum odio eius porro, voluptate minus est temporibus quos debitis.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique esse, eos iure facere voluptatibus consequatur voluptas! Maiores optio eum officiis laborum odio eius porro, voluptate minus est temporibus quos debitis.
                </p>
            </MModal>
            <MModal title='Instructions' onClickHandler={startTest} btntxt="I AM READY TO BEGIN!" openModal={modal2IsOpen} onClose={closeModal2}>
                <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique esse, eos iure facere voluptatibus consequatur voluptas! Maiores optio eum officiis laborum odio eius porro, voluptate minus est temporibus quos debitis.
                
                </p>
            </MModal>


            <div className="flex justify-between shadow-lg p-2 m-2 items-center">
                <div className="rounded-full ">
                    <p>Sno.{props.tid}</p>
                </div>
                <h3>{props.title}</h3>
                <Button onClick={openModal} className="p-2 bg-secondary m-1 text-white hover:text-gray-200">
                    Start
                </Button>

            </div></>
    );
}
export default Test;