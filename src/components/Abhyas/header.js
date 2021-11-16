import Logo from "./logo";
import Link from 'next/link';
import React from "react";
// import { useUser } from "../../../firebase/useUser";

const Header= ()=>{
    // const {user} = useUser();
    const isSignedIn = false;
    return (
        <header className="bg-primary w-full m-0 p-2 flex justify-between items-center">
            <Logo />
            <div className="flex justify-around items-center">
                
                {!isSignedIn && [<Link key='aaa' href={{pathname:'/auth/login',query:{signup:false}}} ><a className="text-white hover:text-tertiary m-2" > Login </a></Link>,
                <Link key="bbb" href={{pathname:'/auth/login',query:{signup:true}}}><a  className="text-white hover:text-tertiary m-2" > Signup</a></Link>]}
                {isSignedIn && <Link href='/auth/logout' ><a className="text-white hover:text-tertiary m-2" > Logout </a></Link> }
               {isSignedIn &&  <div className='w-10 rounded-full h-10 bg-gray-200 '  ><img  className="rounded-full" src={userProfileUrl} /></div>}
            </div>

        </header>
    );

}
export default Header;
