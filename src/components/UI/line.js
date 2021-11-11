const Line= ({text})=>{
    return (
        <div className="flex items-center p-0 my-3 mx-0">
        <hr className="text-gray-600 bg-gray-600 h-1  w-1/5"/>
        <h3 className="text-gray-600 mx-2 text-sm whitespace-nowrap" >{text}</h3>
        <hr className="text-gray-600 bg-gray-600 h-1 w-4/5"/>
        </div>
    ); 
}
export default Line;