import Header from "../../../../components/Abhyas/header";
import Line from "../../../../components/UI/line";
import { useSelector } from "react-redux";
import { useState } from "react";
import ShowDetails from "../../../../components/Abhyas/showitemdetail";
import AAChoice from "../../../../components/Abhyas/aachoice";
import ShowTests from "../../../../components/Abhyas/showtests";
const ItemPage = ({ itemId }) => {
    console.log('got item id ',itemId)
    if (!itemId) {
        return null;
    }
    const item = useSelector((state) => state.mock.items.find((item) => item.id === itemId))
    const [isActive, setisActive] = useState(true)
    const onChangeHandler= (isActive)=>{
        setisActive(isActive)
    }
    return (
        <>
            <Header />
            <Line text={item.title} />
            <ShowDetails duration={`${item.maxTime}hr`} ques={item.maxQues} marks={item.maxMarks} description={item.description} />
            <AAChoice isActive={isActive} onChangeHandler={onChangeHandler} />
            <ShowTests isActive={isActive} tests={item.tests} />
        </>
    );
}
ItemPage.defaultProps = {
    itemId: null
};
export function getStaticPaths() {


    return {
        fallback: true,
        paths: [
            {
                params: {
                    listingId: 'jeeitem',
                    itemId: 'vone',
                }
            }
        ]

    }

}
export async function getStaticProps(context) {
    const itemId = context.params.itemId;

    return {
        props: { itemId }

    }

}
export default ItemPage;