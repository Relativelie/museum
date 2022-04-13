import { FC } from 'react';
import { feedbackContent } from './content';
import './Feedback.scss';

export const Feedback: FC = () => {
    return (
        <div className="feedback">
            <div className="feedback_title">
                <h3>FAQ</h3>
            </div>

            <div className="feedbackContent">
                {feedbackContent.map(((elem) => {
                    const { id, question, answer } = elem;
                    return (
                        <details className="feedbackContent_elem" key={`feedback-${id}`}>
                            <summary className="feedbackContent_question">{question}</summary>
                            <p className="feedbackContent_answer">{answer}</p>
                        </details>
                    );
                }))}
            </div>
        </div>
    );
};
