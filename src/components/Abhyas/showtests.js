import Test from "./testitem";

const ShowTests= (props)=>{
    console.log('here yest',props.tests)
    return (
        <div className="flex flex-col ">
            {props.tests.map((test=><Test key={`${test.tid}`} {...test} />))}

        </div>
    );
}
export default ShowTests;