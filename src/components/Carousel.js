import '../Carousel.scss';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React, { Component} from 'react';
import Slider from 'react-slick'
import data from "../data/slides-cats.json";
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons'

export default class AppendDots extends Component {
    state = {
        activeSlide: 0,
        activeSlide2: 0
    };
    render(){
        const allCount = document.getElementsByClassName('slide-button').length;
        const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
            <button
                {...props}
                className={
                "slick-prev slick-arrow" +
                (currentSlide === 0 ? " slick-disabled" : "")
                }
                aria-hidden="true"
                aria-disabled={currentSlide === 0 ? true : false}
                type="button"
                aria-label="previous slide"
            >
                Previous
            </button>
        );
        const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
            <button
                {...props}
                className={
                    "slick-next slick-arrow" +
                    (currentSlide === slideCount - 1 ? " slick-disabled" : "")
                }
                aria-hidden="true"
                aria-disabled={currentSlide === slideCount - 1 ? true : false}
                type="button"
                aria-label="next slide"
            >
                Next
            </button>
        );
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: false,
            lazyLoad: false,
            prevArrow: <SlickArrowLeft />,
            nextArrow: <SlickArrowRight />,
            beforeChange: (current, next) => {
                this.setState({ activeSlide: next });
            },
            afterChange: current => {
                this.setState({ activeSlide2: current });
            },
            customPaging: function(i) {
                return (
                    <button
                    className="slide-button"
                    id={`slide-${i + 1}`}
                    aria-label={`Slide ${i + 1} of ${allCount}`}>
                        {i + 1}
                    </button>
                )
            }
        };
        return (
            <div className="App">
                <Link smooth to="/#projects" className="text-white transition hover:text-gray-300 hover:ease-in block mb-7 underline"><FontAwesomeIcon icon={faAnglesLeft} /> Back to projects</Link>
                <div className="slick-container">
                    <Slider {...settings}>
                        {data.map((item, index) => (
                            <div key={index} id={index} aria-label={`Slide ${index + 1} of ${data.length}`}>
                                <img src={item.image} alt={item.description} />
                                <p>{item.details}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        );
    }
}