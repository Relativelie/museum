import { FC, useState, useEffect } from 'react';
import {
    currentDate,
    currentMonth,
    currentYear,
    futureDate,
    futureMonth,
    futureYear }
    from './dateValues';

export const Date: FC = () => {
    const [selectedDate, setSelectedDate] = useState('');
    useEffect(() => {
        const date = `${currentYear}-${checkMonth(currentMonth)}-${currentDate}`;
        setSelectedDate(date);
    }, []);

    const checkMonth = (value: number) => {
        return value.toString().length === 2 ? value : `0${value}`;
    };

    const selectDate = (e: any) => {
        const selectedValue = e.target.valueAsDate;
        const myMonth = selectedValue.getMonth() + 1;
        const selectedMonth = checkMonth(myMonth);
        const result = `${selectedValue.getFullYear()}-${selectedMonth}-${selectedValue.getDate()}`;
        setSelectedDate(result);
    };

    return (
        <input
            className="feedback_input"
            name="date"
            type="date"
            value={selectedDate}
            onChange={(e) => selectDate(e)}
            min={`${currentYear}-${checkMonth(currentMonth)}-${currentDate}`}
            max={`${futureYear}-${checkMonth(futureMonth)}-${futureDate}`}
        />
    );
};
