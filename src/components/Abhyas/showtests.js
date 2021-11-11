import Test from "./testitem";

const ShowTests= (props)=>{
    return (
        <div className="flex flex-col ">
            {props.tests.map((test=><Test {...test} />))}

        </div>
    );
}
export default ShowTests;