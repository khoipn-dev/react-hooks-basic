import {useEffect, useState} from 'react';

function formatTime(now) {
    if (!now) return '';

    let hours = `0${now.getHours()}`.slice(-2);
    let minutes = `0${now.getMinutes()}`.slice(-2);
    let seconds = `0${now.getSeconds()}`.slice(-2);

    return `${hours}:${minutes}:${seconds}`;
}

function useClock(props) {
    const [timeString, setTimeString] = useState('');

    useEffect(() => {
        const clockInterval = setInterval(function () {
            let now = new Date();
            let newTimeString = formatTime(now);
            setTimeString(newTimeString);
        }, 1000);
        return () => {
            clearInterval(clockInterval);
        }
    }, [])
    return {timeString};
}

export default useClock;