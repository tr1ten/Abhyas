import Header from "../../../../components/Abhyas/header";
import Line from "../../../../components/UI/line";
import { useRouter } from 'next/router'
import { useSelector } from "react-redux";
import ShowDetails from "../../../../components/Abhyas/showitemdetail";
import AAChoice from "../../../../components/Abhyas/aachoice";
import ShowTests from "../../../../components/Abhyas/showtests";
const ItemPage = ({ itemId }) => {
    if (!itemId) {
        return null;
    }
    const item = useSelector((state) => state.mock.items.find((item) => item.id === itemId))
    return (
        <>
            <Header />
            <Line text={item.title} />
            <ShowDetails duration={`${item.maxTime}hr`} ques={item.maxQues} marks={item.maxMarks} description={item.description} />
            <AAChoice />
            <ShowTests tests={item.tests} />
        </>
    );
}
ItemPage.defaultProps = {
    itemId: null
};
export async function getStaticPaths() {


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