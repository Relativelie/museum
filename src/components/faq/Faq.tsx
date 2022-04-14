import { FC } from 'react';
import { faqContent } from './content';

import './Faq.scss';

export const Faq: FC = () => {
    return (
        <div className="faq">
            <h3 className="faq_title">FAQ</h3>
            <div className="faqContent">
                {faqContent.map(((elem) => {
                    const { id, question, answer } = elem;
                    return (
                        <details className="faqContent_elem" key={`faq-${id}`}>
                            <summary className="faqContent_question">{question}</summary>
                            <p className="faqContent_answer">{answer}</p>
                        </details>
                    );
                }))}
            </div>
        </div>
    );
};
