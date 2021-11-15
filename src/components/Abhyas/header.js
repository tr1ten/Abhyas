import Logo from "./logo";
import Link from 'next/link';
import React from "react";
const Header= ()=>{
    return (
        <header className="bg-primary w-full m-0 p-2 flex justify-between items-center">
            <Logo />
            <div className="flex justify-around items-center">
                <Link href='/auth/login' ><a className="text-white hover:text-tertiary m-2" > Login </a></Link>
                <Link href='/auth/signup'><a  className="text-white hover:text-tertiary m-2" > Signup</a></Link>
                <div className='w-10 rounded-full h-10 bg-gray-200'  />
            </div>

        </header>
    );

}
export default Header;
