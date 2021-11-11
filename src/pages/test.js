import THeader from "../components/Test/header";
import {useParams} from 'react-router-dom';
import { useSelector } from "react-redux";
import QuesCard from "../components/Test/question";
const TestPage= (props)=>{
    const params = useParams()
    const {tid} = params;
    const testitem = useSelector(state => state.mock.tests.find((test)=>test.tid===parseInt(tid)))
    console.log('here test item',testitem.Physics[0])
    return (
        <>
        <THeader title={testitem.title} />
        <QuesCard {...testitem.Physics[0]} />
        </>
    );
}
export default TestPage;