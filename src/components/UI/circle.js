const Circle = (props)=>{
    return (
        <div className={"rounded-full m-1 "+ props.className} >{props.children}</div>

    )
}
export default Circle;