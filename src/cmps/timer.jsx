import { useState, useEffect } from "react";

export const Timer = ({ time }) => {
    // optional: get time from cmp 
    // optimal : get time from props


    useEffect(() => {
        console.log('time:', time)
    }, [])


    console.log('render')
    return (
        <section className="timer">
            <h3>Timer</h3>

        </section>
    )
}
