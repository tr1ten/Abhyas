const AAChoice= ({isActive,onChangeHandler})=>{
    return (
        <div className="mx-auto w-max m-2 bg-gray-300">
            <button onClick={()=>onChangeHandler(true)} className={"border-r-2 border-solid border-primary p-2 " + (isActive ? "underme" :"") } >Active</button>
            <button onClick={()=>onChangeHandler(false)}  className={"border-l-2 border-solid border-primary p-2 " + (!isActive ? "underme" :"") } >Attempted</button>
            
        </div>
    );
}
export default AAChoice;