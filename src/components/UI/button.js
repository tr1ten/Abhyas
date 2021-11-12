import { twMerge } from 'tailwind-merge'
const Button= (props)=>{
    const btnClasses = twMerge("border-2 px-2 py-2 rounded-md",props.className)
    return (
        
        <button onClick={props.onClick} className= {btnClasses} >
            {props.children}
        </button>
    );
}
export default Button;