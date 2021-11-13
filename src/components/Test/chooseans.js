import Button from "../UI/button";
const ChooseAnswer= (props)=>{
    return (
        <div className="flex items-center justify-between border-2 bg-white border-1 shadow m-3">
            <div>
            <Button onClick={props.onMFRHandler} className="border-[1px] m-1 border-primary text-primary font-medium py-1 rounded-md hover:bg-primary hover:text-white">
                <input onChange={props.onMFRHandler} type='checkbox' className="m-1 border-primary" checked={props.isCheck} />
                Review
            </Button>
            <Button onClick={props.onClearHandler} className="border-[1px] mx-1 border-primary text-primary font-medium py-1 rounded-md hover:bg-primary hover:text-white">
                Clear
            </Button>
            </div>
            <div>
            <Button onClick={props.onPrevHandler} className="border-[1px] mx-1 border-primary text-primary font-medium py-1 rounded-md hover:bg-primary hover:text-white">
                Prev
            </Button><Button onClick={props.onNextHandler} className="border-[1px] mx-1 border-primary text-primary font-medium py-1 rounded-md hover:bg-primary hover:text-white">
                Next
            </Button>
            </div>
            
            
        </div>
    );
}
export default ChooseAnswer;