import { useEffect } from "react";
import confetti from "canvas-confetti";

const Birthday = () => {
    useEffect(() => {

        confetti({
      particleCount: 200,  
      spread: 70,          
      origin: { y: 0.6 }   
    });

    }, [])
    return (
        <h1>Holaaa</h1>
    )
}

export default Birthday; 