const Choices= (props)=>{
    return (
        <div onClick={props.onClick} className={"flex w-full group border-2 border-solid items-center hover:bg-green-500 "+(props.isRightAnswer ? 'bg-green-500' : '')}>
            {/* group hover not working fix it :, */}
            <p className={"rounded-full p-1 m-2 group-hover:bg-green-400 group-hover:text-white bg-gray-300 "+(props.isRightAnswer ? 'bg-green-400 text-white' : '') }>{props.kkey}</p>
            <div>{props.choices[props.kkey]} </div>

        </div>
    );
}
export default Choices;