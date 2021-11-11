import Header from "../components/Abhyas/header";
import ShowItems from "../components/Abhyas/showitems";
import Line from "../components/UI/line";
import { useSelector } from "react-redux";
const Home = (props) => {
    const items = useSelector((state)=>state.mock.items)
    console.log('here items',items)
    return (
        <>
            < Header />
            <Line text="Jee Main Mocks" />
            <ShowItems items={items} />
        </>
    );
}
export default Home;