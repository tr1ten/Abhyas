import Circle from "../UI/circle";
const ShowSummary = ({summary}) => {
    
    return (<div className="flex flex-col flex-wrap m-2 justify-center">
        <div className='flex flex-row items-center'>
            <Circle className="bg-green-600 text-white p-1 mx-2" >{summary.answered}</Circle>
            <p>Answered</p>
        </div>
        <div className='flex flex-row items-center'>
            <Circle className="bg-red-600 text-white p-1 mx-2" >{summary.unanswered}</Circle>
            <p>Not Answered</p>
        </div>
        <div className='flex flex-row items-center'>
            <Circle className="bg-purple-600 text-white p-1 mx-2" >{summary.markForReview}</Circle>
            <p>Mark for review</p>
        </div>
        <div className='flex flex-row items-center'>
            <Circle className="bg-gradient-to-br from-green-500 to-purple-500 text-white p-1 mx-2" >{summary.answeredReview}</Circle>
            <p>Answered and Mark for review</p>
        </div>

    </div>
    );
}
export default ShowSummary;