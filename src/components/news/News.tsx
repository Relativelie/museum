import { FC } from 'react';
import { content } from './content';
import './News.scss';

export const News: FC = () => {
    return (
        <div className="news">
            <h3>Новости</h3>
            {content.map(((elem) => {
                const { id, title, description, image } = elem;
                return (
                    <div className="news_item" key={`news-${id}`}>
                        <img src={image} alt="news" />
                        <h4 className="news_title">{title}</h4>
                        <p className="news_description">{description}</p>
                    </div>
                );
            }))}
        </div>
    );
};
