import Item from "./item";

const ShowItems = (props) => {
    return (
        <div className="flex flex-wrap ">
            {props.items.map((item,index) => {
                const itemkey = `item-${index}`
                return (
                    <Item index={index} key={itemkey} {...item} />
                );
            })}
        </div>
    );
}
export default ShowItems;