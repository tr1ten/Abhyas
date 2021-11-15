import Header from "../../../../../../components/Abhyas/header";
import { useSelector } from "react-redux";
const ResultPage= ()=>{
    const result = useSelector(state => state.test.result)
    
    return (!result ? null :
        <><Header />
        <div className="w-full flex">
            <div className='w-full p-1 bg-red-600 text-white'>Marks:{result.userMarks}/{result.totalMarks}</div>
            <div className='w-full p-1 bg-red-400 text-white'>Percentage:{parseInt((result.userMarks/result.totalMarks).toFixed(2)*100)}%</div>

        </div></>
        
    );
}
export default ResultPage;