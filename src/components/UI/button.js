const Button= (props)=>{
    return (
        <button onClick={props.onClick} className= {"border-2 rounded-md " + props.className} >
            {props.children}
        </button>
    );
}
export default Button;