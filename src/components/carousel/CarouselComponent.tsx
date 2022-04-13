import { FC } from 'react';
import Slider from 'react-slick';

import { carouselContent } from './content';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.scss';

export const CarouselComponent: FC = () => {
    const settings = {
        className: 'center',
        centerMode: true,
        infinite: true,
        slidesToShow: 1,
        speed: 500,
        initialSlide: 2,
    };
    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Slider {...settings}>
            {carouselContent.map(((elem) => {
                const { id, name, image } = elem;
                return (
                    <div className="carouselContent" key={`carousel-${id}`}>
                        <div className="carouselContent_text">
                            <h3>{name}</h3>
                        </div>
                        <img className="carouselContent_img" src={image} alt="slide" />
                    </div>
                );
            }))}
        </Slider>
    );
};
