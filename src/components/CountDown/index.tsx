import React, {useEffect, useState} from "react";
import SVGCircle from "./SVGCircle";
import {mapNumber} from "../../utils/Utils";
import moment from "moment";

const CountDown = (props: any) => {
    const { timeTillDate, timeFormat } = props;
    const [days, setDays] = useState<string>();
    const [hours, setHours] = useState<string>();
    const [minutes, setMinutes] = useState<string>();
    const [seconds, setSeconds] = useState<string>();
    const onRefresh = (timeTillDate: any, timeFormat: any) => {
        const then = moment(timeTillDate, timeFormat);
        const now = moment();
        // @ts-ignore
        const countdown = moment(then - now);
        const days = countdown.format('D');
        const hours = countdown.format('HH');
        const minutes = countdown.format('mm');
        const seconds = countdown.format('ss');
        setDays(days);
        setHours(hours);
        setSeconds(seconds);
        setMinutes(minutes);
    }
    useEffect(() => {
        const interval = setInterval(() => onRefresh(timeTillDate, timeFormat), 1000);
        return () => clearInterval(interval);

    }, [timeTillDate, timeFormat])

    const daysRadius = mapNumber(days, 30, 0, 0, 360);
    const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
    const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
    const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);
    return <>
        <div>
            <h1>Countdown</h1>
            <div className='countdown-wrapper'>
                {days && (
                    <div className='countdown-item'>
                        <SVGCircle radius={daysRadius} />
                        {days}
                        <span>days</span>
                    </div>
                )}
                {hours && (
                    <div className='countdown-item'>
                        <SVGCircle radius={hoursRadius} />
                        {hours}
                        <span>hours</span>
                    </div>
                )}
                {minutes && (
                    <div className='countdown-item'>
                        <SVGCircle radius={minutesRadius} />
                        {minutes}
                        <span>minutes</span>
                    </div>
                )}
                {seconds && (
                    <div className='countdown-item'>
                        <SVGCircle radius={secondsRadius} />
                        {seconds}
                        <span>seconds</span>
                    </div>
                )}
            </div>
        </div></>
}
export default CountDown;