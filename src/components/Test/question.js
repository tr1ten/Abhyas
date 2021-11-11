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
                return (
                    <div className="flex w-full border-2 border-solid items-center hover:bg-green-500">
                        {/* group hover not working fix it :, */}
                        <p className="rounded-full p-1 m-2 bg-gray-300 ">{key}</p>
                        <div>{props.choices[key]} </div>

                    </div>
                )
            })}


        </div>
    
    );
}
export default QuesCard;