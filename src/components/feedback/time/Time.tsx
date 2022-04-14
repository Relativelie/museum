import { FC, useState, useEffect } from 'react';
import { time } from './timeValues';

export const Time: FC = () => {
    const [selectedTime, setSelectedTime] = useState('');

    useEffect(() => {
        setSelectedTime(time);
    }, []);

    const selectTime = (e: any) => {
        setSelectedTime(timeParser(e.target.valueAsDate));
    };

    const timeParser = (value: any) => {
        const hours = value.getUTCHours() + 3;
        const minutes = value.getUTCMinutes();
        return `${hours}:${minutes}`;
    };

    return (
        <input
        className="feedback_input"
            name="time"
            type="time"
            value={selectedTime}
            onChange={(e) => selectTime(e)}
        />
    );
};
