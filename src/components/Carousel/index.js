'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi';
import Image from 'next/image';
import { sliderImg1, sliderImg2, sliderImg3, sliderImg4 } from '../../../public/images';
import { useRef } from 'react';

function CarouselContainer() {
    const sliderRef = useRef();
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        appendDots: (dots) => (
            <div style={{}}>
                <ul style={{ margin: '0px', color: '#fff' }}> {dots} </ul>
            </div>
        ),
    };

    const handleSlide = (direction) => {
        const slider = sliderRef.current;
        direction === 'right' ? slider.slickNext() : slider.slickPrev();
    };

    return (
        <div className="relative mt-12 border rounded-lg border-secondary-white dark:border-secondary-dark">
            <Slider
                className={'border rounded-lg border-secondary-white dark:border-secondary-dark'}
                ref={sliderRef}
                {...settings}
            >
                <div className="carouselItem">
                    <Image
                        src={sliderImg1}
                        alt=""
                        className="h-full w-full object-cover border border-transparent rounded-lg"
                    />
                    <div className="border rounded-lg border-secondary-white dark:border-secondary-dark absolute top-0 right-0 bottom-0 left-0 bg-black/[.54]">
                        <h2 className="capitalize text-white text-center relative top-2/4 -translate-y-2/4 font-bold text-3xl">
                            home page
                        </h2>
                    </div>
                </div>
                <div className="carouselItem">
                    <Image
                        src={sliderImg2}
                        alt=""
                        className="h-full w-full object-cover border border-transparent rounded-lg"
                    />
                    <div className="border rounded-lg border-secondary-white dark:border-secondary-dark absolute top-0 right-0 bottom-0 left-0 bg-black/[.54]"></div>
                </div>
                <div className="carouselItem">
                    <Image
                        src={sliderImg3}
                        alt=""
                        className="h-full w-full object-cover border border-transparent rounded-lg"
                    />
                    <div className="absolute border rounded-lg border-secondary-white dark:border-secondary-dark top-0 right-0 bottom-0 left-0 bg-black/[.54]"></div>
                </div>
                <div className="carouselItem">
                    <Image
                        src={sliderImg4}
                        alt=""
                        className="h-full w-full object-cover border border-transparent rounded-lg"
                    />
                    <div className="absolute border rounded-lg border-secondary-white dark:border-secondary-dark top-0 right-0 bottom-0 left-0 bg-black/[.54]"></div>
                </div>
            </Slider>
            <button className="absolute left-0 top-2/4 w-24 -translate-y-2/4">
                <HiChevronLeft
                    onClick={() => handleSlide('left')}
                    className="w-full text-4xl text-white transition-colors hover:text-primary-red lg:text-6xl"
                />
            </button>
            <button className="absolute right-0 top-2/4 w-24 -translate-y-2/4">
                <HiChevronRight
                    onClick={() => handleSlide('right')}
                    className="w-full text-4xl text-white transition-colors hover:text-primary-red lg:text-6xl"
                />
            </button>
        </div>
    );
}

export default CarouselContainer;
