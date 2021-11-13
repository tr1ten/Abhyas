import { useNavigate } from "react-router";
import Circle from '../UI/circle';
const Item = (props) => {
    const navigate = useNavigate();
    const onClickHandler = () => {
        navigate({
            pathname: '/home/jeeitem/' + props.id.toString()
        })
    }
    return (
        <div>

            <div onClick={onClickHandler} className="flex w-52 flex-col items-center rounded-lg m-2 border-solid border-2 border-tertiary shadow-md move-me">
                <img className="w-full" src={props.img} alt='testlogo' />
                <div className="flex items-center justify-evenly w-full">
                <Circle className="bg-tertiary inline-block py-1 px-2 text-white">{props.id}</Circle>

<h3 className="font-bold space-x-1">{props.title} </h3>

                </div>
            </div>
        </div>
    );
}
export default Item;