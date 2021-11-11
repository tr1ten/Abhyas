const ShowDetails= (props)=>{
    return (
        <div className="flex flex-col justify-around sm:flex-row">
            <p className="m-1"> 
                {props.description}
            </p>
            <div className="flex border-2 border-solid border-gray-600 justify-center ">
                <div className="flex flex-col m-2 items-center ">
                    <p className="font-semibold">Duration</p>
                    <p>{props.duration}</p>
                </div>
                <div className="flex flex-col m-2 items-center">
                    <p className="font-semibold"> Marks</p>
                    <p>{props.marks}</p>
                </div><div className="flex flex-col m-2 items-center">
                    <p className="font-semibold">Ques</p>
                    <p>{props.ques}</p>
                </div>

            </div>
        </div>
    );
}
export default ShowDetails;
