import { useEffect } from "react";
import Button from "../../components/UI/button";
import { useRouter } from "next/router";
import { useUser } from "../../../firebase/useUser";
const LogOutPage = ({ isSignOut = true }) => {
    const router = useRouter();
    const { logout } = useUser();
    useEffect(async () => {
        await logout()
        
    }, [])

    const onClickHandler = () => {
        router.push('/home')

    }
    return (

        <><h1>Logout {isSignOut ? 'Succesfully' : 'Failed'} Click here if you dont automatically redirected !</h1>
            <Button onClick={onClickHandler}>GO HOME</Button></>
    );

}

export default LogOutPage;