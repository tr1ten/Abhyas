import Header from "../components/Abhyas/header";
import { useLocation } from "react-router";
const ResultPage= (props)=>{
    const {state} = useLocation();
    const result = state;
    return (
        <><Header />
        <div className="w-full flex">
            <div className='w-full p-1 bg-red-600 text-white'>Marks:{result.userMarks}/{result.totalMarks}</div>
            <div className='w-full p-1 bg-red-400 text-white'>Percentage:{(result.userMarks/result.totalMarks).toFixed(2)*100}%</div>

        </div></>
        
    );
}
export default ResultPage;