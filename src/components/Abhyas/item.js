import { useRouter } from "next/router";
import Circle from '../UI/circle';
const Item = (props) => {
    const router = useRouter();
    const onClickHandler = () => {
        console.log(`pushing to  ${router.asPath}/jeeitem/${props.id}`)
        router.push(`${router.asPath}/jeeitem/${props.id}`
        )
    }
    return (
        <div>

            <div onClick={onClickHandler} className="flex w-52 flex-col items-center rounded-lg m-2 border-solid border-2 border-tertiary shadow-md move-me">
                <img className="w-full" src={props.img} alt='testlogo' />
                <div className="flex items-center justify-evenly w-full">
                    <Circle className="bg-tertiary inline-block py-1 px-2 text-white">{props.index+1}</Circle>

                    <h3 className="font-bold space-x-1">{props.title} </h3>

                </div>
            </div>
        </div>
    );
}
export default Item;