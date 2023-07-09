import { useState, useEffect, useRef } from "react";

export const Timer = ({ time }) => {

    const intervalIdRef = useRef()
    let [count, setCount] = useState(time)

    useEffect(() => {
        console.log('time:', time)
        startInterval()
    }, [])

    useEffect(() => {
        console.log('count:', count)
        if (!count) clearInterval(intervalIdRef.current)
    }, [count])


    const startInterval = () => {
        if (!intervalIdRef.current) {
        intervalIdRef.current = setInterval(() => {
            setCount(count => count - 1)
        }, 1000)
        }


    }
    const stopTimer = () => {
        clearInterval(intervalIdRef.current)
        intervalIdRef.current = ''
    }


    function convertToTime(seconds) {
        const minutes = Math.floor(seconds / 60) // חילוק השניות לדקות
        const remainingSeconds = seconds % 60 // השניות היתרות

        const formattedMinutes = minutes.toString().padStart(2, '0') // המרת הדקות לפורמט של שני ספרות
        const formattedSeconds = remainingSeconds.toString().padStart(2, '0') // המרת השניות לפורמט של שני ספרות
        return `${formattedMinutes}:${formattedSeconds}`;
    }

    return (
        <section className="timer">
            <h3>Timer</h3>
            time: {convertToTime(count)}
            <button onClick={stopTimer}>stop timer</button>
            <button onClick={startInterval} >continue timer</button>
        </section>
    )
}
