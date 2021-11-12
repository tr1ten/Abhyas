import Choices from "./choices";

const QuesCard= (props)=>{
    return (
        <div className='m-4 p-2 shadow-md bg-white rounded-md'>
            <div className="w-full p-2 font-bold text-left space-x-1 bg-primary text-white">
                <h3>Q.{props.id.slice(1)} Single Choice</h3>

            </div>
            <div className="p-1 text-center m-1">
                <p>
                    {props.q}
                </p>
            </div>
            {Object.keys(props.choices).map((key)=>{
                return (<Choices key={'choice'+key} kkey={key} onClick={()=>props.onSelectAnswer(key)} isRightAnswer={props.selectedAnswer===key} choices={props.choices} /> )
            })}


        </div>
    
    );
}
export default QuesCard;