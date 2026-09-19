import { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { nextSlide } from './SliderUtility';
import './Slider.css';
import ChevLeft from '../../Images/VectorImages/CheveronLeft.svg';
import ChevRight from '../../Images/VectorImages/CheveronRight.svg';

interface SliderProps {
    slides: React.ReactNode[];
    timeBeforeAutoSlideInSeconds: number;
}

const Slider: React.FC<SliderProps> = ({ slides, timeBeforeAutoSlideInSeconds = 0 }) => {
    const elementAnimation = { 
        from: { opacity: 0 }, 
        to: { opacity: 1 }, 
        config: { duration: 500 },
        reset: true
    };

    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideAnimation, api] = useSpring(() => (elementAnimation));
    const slideArrayLength = slides.length;

    function slideActuate(slidesToMove: number) {
        setCurrentIndex(nextSlide(currentIndex, slideArrayLength, slidesToMove));
        api.start(elementAnimation);
    }

    const currentSlide: React.ReactNode = (
        <animated.div className="slider-animated-slide" style={slideAnimation}>
            {slides[currentIndex]}
        </animated.div>
    );

    return (
        <div className="slider-container">
            <button onClick={() => slideActuate(-1)} className="slider-actuate-button slider-left" ><ChevLeft /></button>
            {currentSlide}
            <button onClick={() => slideActuate(1)} className="slider-actuate-button slider-right" ><ChevRight /></button>
        </div>
    );
};

export default Slider;