import React, { useState, useEffect, useRef } from 'react';

function StopWatch({ isrunning, setisrunning }) {
    const [time, settime] = useState(25 * 60); // 25 minutes in seconds
    const intervalRef = useRef(null);

    function startClock() {
        if (!isrunning) {
            setisrunning(true);
            clearInterval(intervalRef.current);
            intervalRef.current = setInterval(() => {
                settime((time) => {
                    if (time <= 0) {
                        clearInterval(intervalRef.current);
                        setisrunning(false);
                        return 0;
                    }
                    return time - 1;
                });
            }, 1000);
        }
    }

    function stopClock() {
        setisrunning(false);
        clearInterval(intervalRef.current);
    }

    function resetClock() {
        settime(25 * 60); // Reset to 25 minutes
        setisrunning(false);
        clearInterval(intervalRef.current);
    }

    useEffect(() => {
        return () => clearInterval(intervalRef.current);
    }, []);

    useEffect(() => {
        if (time <= 0) {
            setisrunning(false);
        }
    }, [time]);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return (
        <div id="watch">
            <button id="watchBtnId" onClick={startClock}>
                {`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
            </button>
            <button id="stopClock" onClick={stopClock}>Stop</button>
            <button id="resetBtn" onClick={resetClock}>Reset</button>
        </div>
    );
}
export default StopWatch;