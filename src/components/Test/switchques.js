import Button from "../UI/button";
const SwitchQues= (props)=>{

    return (
        <div className='flex flex-wrap'>
            {props.questions.map((ques=>{
                let addClass='';
                const oldQues = props.userRecord.find((q)=>q.qid===ques.id)
                // todo: refactor to more robust way
                if(oldQues){
                    if(oldQues.markForReview ){
                        if(!oldQues.selectedAnswer){
                            addClass = 'bg-purple-500 '
                        }
                        else{

                            addClass = 'bg-gradient-to-br from-green-500 to-purple-500 '
                        }
                    }
                    
                    else if(oldQues.selectedAnswer){
                        addClass = 'bg-green-500 '
                    }
                    else{
                        addClass = 'bg-red-500 '
                    }
                }
                return (<Button key={`circle-${ques.id}`} onClick={()=>props.quesChangeHandler(ques.id)} className={'hover:border-tertiary rounded-full m-1 '+addClass +(ques.id===props.qid ? 'border-tertiary' : "")}>
                {ques.id.slice(1)}   
                </Button>)
            }))}
        </div>
    );
}
export default SwitchQues;