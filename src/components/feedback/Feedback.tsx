import { Date } from './date/Date';
import { Email } from './email/Email';
import './Feedback.scss';
import { Telephone } from './telephone/Telephone';
import { Time } from './time/Time';

export const Feedback = () => {
    return (
        <div className="feedback">
            <h3 className="feedback_title">Подпишись</h3>
            <p className="feedback_description">Отправляем анонсы новых статей, выпусков и трансляций</p>
            <form className="feedback_form" action="some url">
                <Email />
                <Date />
                <Telephone />
                <Time />
            </form>
            <button className="feedback_subscribe">Подписаться</button>
        </div>
    );
};
