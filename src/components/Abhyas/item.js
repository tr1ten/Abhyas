import { useNavigate } from "react-router";
const Item= (props)=>{
    const navigate = useNavigate();
    const onClickHandler = ()=>{
        navigate({
            pathname:'/home/jeeitem' + props.id.toString()
        })
    }
    return (
        <div onClick={onClickHandler} className="flex flex-col items-center rounded-lg p-2 m-2 border-solid border-2 border-tertiary bg-gradient-to-br from-yellow-100 to-yellow-600 shadow-md hover:to-secondary hover:border-secondary move-me">
            <h3 className="font-bold space-x-1">{props.title} </h3>
            <p className="text-gray-700">{props.id}</p>
        </div>
    );
}
export default Item;