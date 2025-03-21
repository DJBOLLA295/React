import React, { useState, useEffect, useRef } from 'react';
import TimerDisplay from './TimerDisplay';
import InputMinutes from './InputMinutes';
import Controls from './Controls';
import Title2 from './Title2';


function Timer() {
    const [inputMinutes, setInputMinutes] = useState(0);
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const timerRef = useRef(null);

    const handleInputChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value >= 0) {
            setInputMinutes(value);
            setTime(value * 60);
            setIsRunning(false);
        }
    };

    const handleStartStop = () => {
        setIsRunning(!isRunning);
    };

    const handleReset = () => {
        setIsRunning(false);
        setTime(inputMinutes * 60);
    };

    useEffect(() => {
        if (isRunning && time > 0) {
            timerRef.current = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        } else {
            clearInterval(timerRef.current);
        }
        return () => clearInterval(timerRef.current);
    }, [isRunning, time]);

    useEffect(()=>{
        setTime(inputMinutes*60);
    },[inputMinutes]);

    return (
        <div className="bg-azzurro flex flex-col items-center justify-center
        w-[200px] h-[200px] rounded-[15px] m-[10px]
        xs:w-[200px] xs:h-[300px] xs:rounded-[20px] xs:m-[5px]
        sm:w-[400px] sm:h-[400px] sm:rounded-[25px] sm:m-[7.5px]
        md:w-[500px] md:h-[500px] md:rounded-[30px] md:m-[10px]
        lg:w-[600px] lg:h-[600px] lg:rounded-[35px] lg:m-[12.5px]
        xl:w-[700px] xl:h-[700px] xl:rounded-[40px] xl:m-[15px]
        2xl:w-[800px] 2xl:h-[800px] 2xl:rounded-[45px] 2xl:m-[17.5px]
        3xl:w-[900px] 3xl:h-[900px] 3xl:rounded-[50px] 3xl:m-[20px]">
            <Title2>Countdown Timer</Title2>
            <InputMinutes inputMinutes={inputMinutes} onChange={handleInputChange} />
            <TimerDisplay time={time} />
            <Controls isRunning={isRunning} onStartStop={handleStartStop} onReset={handleReset} />
        </div>
    );
}

export default Timer;


