import { FC, useState, useEffect, FormEvent } from 'react';
import { time } from './timeValues';

export const Time: FC = () => {
    const [selectedTime, setSelectedTime] = useState('');

    useEffect(() => {
        setSelectedTime(time);
    }, []);

    const selectTime = (e: FormEvent<HTMLInputElement>) => {
        const elem = e.target as HTMLInputElement;
        if (elem.valueAsDate !== null) setSelectedTime(timeParser(elem.valueAsDate));
    };

    const timeParser = (value: Date) => {
        const hours = value.getUTCHours().toString().length === 2 ? value.getUTCHours() : `0${value.getUTCHours()}`;
        const minutes = value.getUTCMinutes().toString().length === 2 ? value.getUTCMinutes() : `0${value.getUTCMinutes()}`;
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
