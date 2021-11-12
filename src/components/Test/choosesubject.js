import Button from "../UI/button";

const ChooseSubject= (props)=>{
    return (
        <div className="flex justify-evenly flex-wrap w-full mx-1 my-2">
            {props.subjects.map((subject)=>{
                return <Button key={subject.id} onClick={()=>props.onClickHandler(subject.id)} className={"rounded-2xl py-1 hover:border-tertiary " + (subject.active ? 'border-tertiary' : '') }>{subject.title}</Button>
            })}    
        </div>
    
    );
}
export default ChooseSubject;