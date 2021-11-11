import Logo from "./logo";
import {Link} from 'react-router-dom';
const Header= ()=>{
    return (
        <header className="bg-primary w-full m-0 p-2 flex justify-between items-center">
            <Logo />
            <div className="flex justify-around w-2/5 items-center">
                <Link className="text-white hover:text-tertiary" to='/auth/login'>Login </Link>
                <Link className="text-white hover:text-tertiary" to='/auth/signup'>Signup </Link>
                <div className='w-10 rounded-full h-10 bg-gray-200'  />
            </div>

        </header>
    );
}
export default Header;