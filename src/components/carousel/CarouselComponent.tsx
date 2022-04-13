import { useEffect, useState } from "react";

import slideOne from "../../assets/images/carousel/img.png";
import Slider from "react-slick";
import "./Carousel.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export const CarouselComponent = () => {
    const [translate, setTranslate] = useState(15);
    const [current, setCurrent] = useState(0);

    const test = [
        ["Cлайд 4", slideOne],
        ["Cлайд 1", slideOne],
        ["Cлайд 2", slideOne],
        ["Cлайд 3", slideOne],
    ]



    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 1,
        speed: 500,
        initialSlide: 2
    };

    return (
        <Slider {...settings}>
            {test.map((elem, index) => {
                return (
                    <div className="carouselContent" key={`carousel-${index}`}>
                        <div className="carouselContent_text">
                            <h3>{elem[0]}</h3>
                        </div>
                        <img className="carouselContent_img" src={elem[1]} alt="slide picture" />
                    </div>
                )
            })}
        </Slider>
    );
}

