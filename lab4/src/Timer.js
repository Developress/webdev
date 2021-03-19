import './index.css';
import {Button} from 'react-bootstrap'
import {useState} from 'react';

let time = null;
const INTERVAL = 5;

export function Timer(){
    const [timeValue, setTimeValue] = useState(INTERVAL);
    const [disabled, setDisabled] = useState(false);

    const timer = () => {
        setTimeValue(timeValue => timeValue - 1);
    }

    const stop = () => {
        setDisabled(false);
        clearInterval(time);
        setTimeValue(INTERVAL);
    }

    return (
        <div className="flex-div">
            <Button disabled={disabled} variant="primary" onClick={() => {
                setDisabled(true);
                time = setInterval(timer, 1000);
                setTimeout(stop, INTERVAL*1000);
            }}>Start timer</Button>
            <Button disabled={!disabled} variant="primary" onClick={() => {
                stop();
            }}>Stop timer</Button>
            <span id="timer">{getTimeString(timeValue)}</span>
        </div>
    )
}

function getTimeString(time){
    let seconds = time % 60
    let minutes = Math.floor(time / 60)

    if (seconds < 10){
        seconds = `0${seconds}`
    } else {
        seconds = `${seconds}`
    }

    if (minutes < 10){
        minutes = `0${minutes}`
    } else {
        minutes = `${minutes}`
    }

    return `${minutes} : ${seconds}`
}