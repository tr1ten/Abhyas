import { useEffect, useState } from "react";
import Circle from "../UI/circle";
import ChooseSubject from "./choosesubject";
import SwitchQues from "./switchques";
import { getSubjectKey } from "../../utils/test";
import { twMerge } from "tailwind-merge";
const DisplayQues = (props) => {
    // Hardcoding subject for now but might change latter to add new subjects 
    const [subjects, setsubjects] = useState([{ title: 'Phy', id: 'p', active: true }, { title: 'Maths', id: 'm', active: false }, { title: 'Chem', id: 'c', active: false }])
    
    const onClickHandler =
        (sid) => {

            setsubjects((sbs)=>{
                const subs = [...sbs];
                subs.forEach((subject) => {
                    if (sid === subject.id) {
                        subject.active = true
                    }
                    else {
                        subject.active = false
                    }
                })
                return subs;
            })
        }

    useEffect(() => {

        const sid = props.qid.slice(0, 1)
        setsubjects((sbs)=>{
            const subs = [...sbs];
            subs.forEach((subject) => {
                if (sid === subject.id) {
                    subject.active = true
                }
                else {
                    subject.active = false
                }
            })
            return subs;
        })
        

    }, [props.qid])
    return (
        <div className={twMerge("flex w-full  flex-col p-2 border-[1px] rounded-md  shadow-sm m-1 ",props.className)}>
            <div className="flex flex-col sm:flex-row">
                <div className="p-2 m-1 text-center border-[1px] border-solid rounded-lg shadow">
                    <p>QUESTION PAPER</p>
                </div>
                <div className="p-2 m-1 text-center border-[1px] border-solid rounded-lg shadow">
                    <p>INSTRUCTIONS</p>
                </div>

            </div>
            <div className="shadow p-1 border-2 rounded-md">
                <div className='flex flex-row items-center'>
                    <Circle className=" w-3 h-3 bg-green-600" />
                    <p>Answered</p>
                </div>
                <div className='flex flex-row items-center'>
                    <Circle className=" w-3 h-3 bg-red-600" />
                    <p>Not Answered</p>
                </div>
                <div className='flex flex-row items-center'>
                    <Circle className="w-3 h-3 bg-purple-600" />
                    <p>Mark for review</p>
                </div>

            </div>
            <ChooseSubject onClickHandler={onClickHandler} subjects={subjects} />
            <SwitchQues userRecord={props.userRecord} quesChangeHandler={props.quesChangeHandler} qid={props.qid} questions={props.testitem[getSubjectKey(subjects.find((sub)=>sub.active).id)]}  />
        </div>

    );
}
export default DisplayQues;