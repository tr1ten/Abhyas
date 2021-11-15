import Button from "../UI/button";
import Logo from "../Abhyas/logo";
import { useTimer } from 'react-timer-hook';
const THeader = ({ title,duration,onSubmitHandler }) => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + duration);
    const {
        seconds,
        minutes,
        hours,
        
      } = useTimer({ expiryTimestamp:time, onExpire: () => onSubmitHandler(true) });
    const wakt = (seconds<10) ? `${hours}hr:${minutes}m:0${seconds}s` : `${hours}hr:${minutes}m:${seconds}s` 
        return (
            <header className="bg-primary w-full m-0 p-2 flex justify-between items-center">
                <div className="flex font-bold items-center text-white">
                    <Logo />
                    <h2>{title}</h2>
                </div>
                <div className="flex justify-around w-2/5 items-center sm:flex-row flex-col">
                    <p className="text-white">{wakt }</p>
                    <Button onClick={onSubmitHandler} className="text-primary bg-white m-2" >Submit</Button>
                </div>

            </header>
        );
    }
    export default THeader;