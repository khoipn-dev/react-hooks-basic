import React from 'react';
import useClock from "../hooks/useClock";
import './ClockHooks.scss';
import useMagicColor from "../hooks/useMagicColor";

function ClockHooks(props) {
    const {timeString} = useClock();
    const color = useMagicColor();

    return (
        <p className="clock" style={{fontSize: '42px', backgroundColor: color}}>{timeString}</p>
    );
}

export default ClockHooks;