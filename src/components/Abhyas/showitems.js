import Item from "./item";

const ShowItems = (props) => {
    return (
        <div className="flex flex-wrap ">
            {props.items.map((item) => {
                return (
                    <Item {...item} />
                );
            })}
        </div>
    );
}
export default ShowItems;