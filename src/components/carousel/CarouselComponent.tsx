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
        ["слайд 4"],
        ["слайд 1", "./../../"],
        ["слайд 2"],
        ["слайд 3"],

    ]

    // useEffect(() => {
    //     const next = (current + 1) % slides.length;
    //     const id = setTimeout(() => setCurrent(next), time);
    //     return () => clearTimeout(id);
    //   }, [current]);

    // useEffect(() => {
    //     const carouselSlides: HTMLElement | null = document.querySelector(".carouselSlides");
    //     if (carouselSlides !== null) {
    //         carouselSlides.style.transform = `translateX(${translate}%)`
    //     }

    // })

    const changeTranslate = (e: any) => {

        if (e.target.innerText === "back") {
            setTranslate(translate + 80)
        }
        else setTranslate(translate - 90)
    }


    const settings = {
        // className: "center",
        // centerMode: true,
        // infinite: true,
        // centerPadding: "16%",
        // slidesToShow: 1,
        // speed: 500,
        // slidesToScroll: 1,
        className: "center",
        centerMode: true,
        infinite: true,
        // centerPadding: "10px",
        slidesToShow: 1,
        speed: 500,
        initialSlide: 2

      };
      return (
        <Slider {...settings}>
{test.map((elem, index) => {
                    return (
                        <div key={`carousel-${index}`}>
                            <div>{elem}</div>
                            <img className="carouselSlides_img" src={slideOne} alt="slide picture" />
                        </div>

                    )
                })}
        </Slider>
      );
}


{/* <div className="carousel">
            <div className="carouselSlides">
                {test.map((elem, index) => {
                    return (
                        <div key={`carousel-${index}`}>
                            <div>{elem}</div>
                            <img className="carouselSlides_img" src={slideOne} alt="slide picture" />
                        </div>

                    )
                })}
            </div>
            <button onClick={(e) => changeTranslate(e)}>back</button>
            <button onClick={(e) => changeTranslate(e)}>next</button>
        </div> */}

