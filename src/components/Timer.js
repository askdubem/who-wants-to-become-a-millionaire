import { useEffect, useState } from "react"

export default function Timer({setStop, questionNum, setQuestionNum}) {
    const [timer, setTimer] = useState(120)
    
    useEffect(()=>{
        if(timer === 0) return setStop(true)
        
        const interval = setInterval(()=>{
            setTimer((a)=>a - 1);
        }, 1000)
        
        return () => {
            clearInterval(interval);
        };
    }, [ timer, setStop]);

    useEffect(()=>{
        setTimer(120)
    }, [questionNum])

    return timer
}