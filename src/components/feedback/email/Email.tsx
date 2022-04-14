import { useState, FC, SyntheticEvent, useEffect } from 'react';

export const Email: FC = () => {
    const [rule] = useState(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    const [isCorrect, setIsCorrect] = useState(true);
    const [incorrectClass, setIncorrectClass] = useState('');

    useEffect(() => {
        if (!isCorrect) setIncorrectClass('incorrectInputValue');
        else setIncorrectClass('');
    });

    const checkEmail = (eventType: string, event: SyntheticEvent<EventTarget>) => {
        if (!(event.target instanceof EventTarget)) {
            return;
        } else if (eventType === 'blur' || eventType === 'Enter') {
            const elem = event.target as HTMLInputElement;
            setIsCorrect(rule.test(elem.value));
            elem.blur();
        } else return;
    };

    return (
        <input
            className={`feedback_input ${incorrectClass}`}
            name="email"
            type="email"
            placeholder="Email"
            onBlur={(e) => checkEmail(e.type, e)}
            onKeyUp={(e) => checkEmail(e.key, e)}
        />
    );
};
