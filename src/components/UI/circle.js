const Circle = (props)=>{
    return (
        <div className={"rounded-full w-3 h-3 m-1 "+ props.className} >{props.children}</div>

    )
}
export default Circle;