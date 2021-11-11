import logo from './abhyas.png';
const Logo = (props) => {
    return (
        <div className="flex m-3 " >
        <img className="w-7 h-auto" src={logo} alt="logo" />
        <h1 className="mx-2 font-bold text-lg text-white">Abhyas</h1>
        </div>
    );
}
export default Logo;