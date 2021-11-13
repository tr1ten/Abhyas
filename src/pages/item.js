import Header from "../components/Abhyas/header";
import Line from "../components/UI/line";
import  {useParams} from 'react-router-dom';
import { useSelector } from "react-redux";
import ShowDetails from "../components/Abhyas/showitemdetail";
import AAChoice from "../components/Abhyas/aachoice";
import ShowTests from "../components/Abhyas/showtests";
const ItemPage = (props) => {
    const params= useParams();
    const item = useSelector((state)=>state.mock.items.find((item)=>item.id===parseInt(params.id)))
    return (
        <>
        <Header />
        <Line text={item.title} />
        <ShowDetails duration={`${item.maxTime}hr`} ques={item.maxQues} marks={item.maxMarks} description={item.description} />
        <AAChoice />
        <ShowTests tests={item.tests}/>
        </>
    );
}
export default ItemPage;