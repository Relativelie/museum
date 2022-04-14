import { MouseEvent, useState } from 'react';
import 'regenerator-runtime/runtime';
import 'core-js/stable';

import { Date } from './date/Date';
import { Email } from './email/Email';
import { Telephone } from './telephone/Telephone';
import { Time } from './time/Time';

import './Feedback.scss';

export const Feedback = () => {
    const [requestResultText, setRequestResultText] = useState('');

    const sendFeedbackDetails = async (e: MouseEvent<HTMLButtonElement>) => {
        const elem = e.target as HTMLFormElement;

        if (checkValues(elem)) {
            const inputValues = {
                email: elem.form[0].value,
                tel: elem.form[1].value,
                date: elem.form[2].value,
                time: elem.form[3].value,
            };
            await feedbackRequest(inputValues);
            if (elem.parentElement !== null) elem.parentElement.reset();
        }
    };

    const checkValues = (formValues: HTMLFormElement) => {
        const checkForEmptyResults = [];
        const checkForCorrectResults = [];
        for (let i = 0; i < formValues.form.length - 1; i++) {
            checkForEmptyResults.push(checkForEmptiness(formValues.form[i].value));
            checkForCorrectResults.push(checkForCorrectValue(formValues.form[i].className));
        }
        if (checkForEmptyResults.indexOf(false) === -1
            && checkForCorrectResults.indexOf(false) === -1) {
            return true;
        } else return false;
    };

    const checkForEmptiness = (value: string) => {
        if (value.length === 0) return false;
        else return true;
    };

    const checkForCorrectValue = (value: string) => {
        if (value.indexOf('incorrectInputValue') !== -1) return false;
        else return true;
    };

    const feedbackRequest = async (values: any) => {
        try {
            const resopnse = await fetch('https://sendfeedback.free.beeceptor.com/feedback', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });
            const result = await resopnse.json();
            if (result.status === 'error') {
                setRequestResultText('Something went wrong...');
            } else setRequestResultText('Заявка отправлена');
        } catch (err) {
            setRequestResultText('Something went wrong...');
        }
    };

    return (
        <div className="feedback">
            <h3 className="feedback_title">Подпишись</h3>
            <p className="feedback_description">Отправляем анонсы новых статей, выпусков и трансляций</p>
            <form className="feedback_form" action="some url">
                <Email />
                <Date />
                <Telephone />
                <Time />
                <button
                    type="button"
                    className="feedback_subscribe"
                    onClick={(e) => sendFeedbackDetails(e)}
                >
                    Подписаться
                </button>
            </form>
            <p className="requestResult">{requestResultText}</p>
        </div>
    );
};
