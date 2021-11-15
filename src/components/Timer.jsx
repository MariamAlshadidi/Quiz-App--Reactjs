import { useEffect, useState } from "react";
import '../App.css'

export default function Timer({setStop ,qustionNumber}) {
    const [timer, setTimer]= useState(15)

 useEffect(() => {
     if ( timer === 0) return setStop(true)
     if ( qustionNumber === 16) return setStop(true)
  
 


     const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
     }, 1000);

     return () => clearInterval(interval);
 }, [setStop, timer]);
useEffect(() => {
    setTimer(15);
}, [qustionNumber])

    return timer ;

}


