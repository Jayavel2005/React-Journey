import { useEffect, useState } from "react";
const EffectHook = () => {

    const [time, setTime] = useState(new Date().toLocaleTimeString());


    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(new Date().toLocaleTimeString())
        },1000)
        return() =>{
            clearInterval(interval)
        }
    },[])




    return (
        <div>
            <p>{time}</p>
        </div>
    )
}

export default EffectHook;