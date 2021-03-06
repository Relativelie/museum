import { FC } from 'react';
import { content } from './content';

import './News.scss';

export const News: FC = () => {
    return (
        <section className="news">
            <header>
                <h3 className="newsTitle">Новости</h3>
            </header>
            <div className="newsContent">
                {content.map(((elem) => {
                    const { id, title, description, image } = elem;
                    return (
                        <div className="newsContent_item" key={`newsContent-${id}`}>
                            <img src={image} alt="news" />
                            <h4 className="newsContent_title">{title}</h4>
                            <p className="newsContent_description">{description}</p>
                        </div>
                    );
                }))}
            </div>
        </section>
    );
};
