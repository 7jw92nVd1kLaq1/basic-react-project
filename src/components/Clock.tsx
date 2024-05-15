import React, { useEffect } from "react";


export const Clock : React.FC = () => {
    const [time, setTime] = React.useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timeInterval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 500);
        
        // clear it before the unmount
        return () => {
            clearInterval(timeInterval);
        };
    });

    return (
        <div className="text-center mt-5 mb-10">
            <h3 className="text-[32px]">Current Time</h3>
            <h2 className="text-[38px]">{time}</h2>
        </div>
    )
};