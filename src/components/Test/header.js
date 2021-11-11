import Button from "../UI/button";
import Logo from "../Abhyas/logo";
const THeader= ({title})=>{
    return (
        <header className="bg-primary w-full m-0 p-2 flex justify-between items-center">
            <div className="flex font-bold items-center text-white">
            <Logo />
            <h2>{title}</h2>
             </div>
            <div className="flex justify-around w-2/5 items-center">
                <p>02:59:59</p>
                <Button className="text-primary bg-white p-2 m-2" >Submit</Button>
            </div>

        </header>
    );
}
export default THeader;