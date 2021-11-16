import React from "react";
import FirebaseAuth from '../../components/Firebase/auth'

const SignInScreen = () => {
    return (
        <div className="bg-gray-400 flex items-center justify-center w-full h-screen">  
            <div className="bg-white rounded-md shadow-md p-2">
                <FirebaseAuth />
                
            </div>
        </div>
    )
}

export default SignInScreen;