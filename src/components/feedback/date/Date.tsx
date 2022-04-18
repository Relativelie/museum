import { FC, useState, useEffect, FormEvent } from 'react';
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
        const date = `${currentYear}-${checkMonthAndDay(currentMonth)}-${checkMonthAndDay(currentDate)}`;
        setSelectedDate(date);
    }, []);

    const checkMonthAndDay = (value: number) => {
        return value.toString().length === 2 ? value : `0${value}`;
    };

    const selectDate = (e: FormEvent<HTMLInputElement>) => {
        const elem = e.target as HTMLInputElement;
        const selectedValue = elem.valueAsDate;
        if (selectedValue !== null) {
            const myMonth = selectedValue.getMonth() + 1;
            const selectedMonth = checkMonthAndDay(myMonth);
            const selectedDay = checkMonthAndDay(selectedValue.getDate());
            const result = `${selectedValue.getFullYear()}-${selectedMonth}-${selectedDay}`;
            setSelectedDate(result);
        }
    };

    return (
        <input
            className="feedback_input"
            name="date"
            type="date"
            data-testid="form-field-date"
            value={selectedDate}
            onChange={(e) => selectDate(e)}
            min={`${currentYear}-${checkMonthAndDay(currentMonth)}-${currentDate}`}
            max={`${futureYear}-${checkMonthAndDay(futureMonth)}-${futureDate}`}
        />
    );
};
