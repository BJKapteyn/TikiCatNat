import { useEffect } from 'react';
import { animated, useSpring } from 'react-spring';
import { easings } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import './HomePageInfo.css';

export const HomePageInfo: React.FC = () => {
    const observerThreshold = 0.8;
    const translateDistance = 10;
    const animationDuration = 500;

    const { ref: slideRightIntersectionRef, inView: slideRightInView } = useInView({
        threshold: observerThreshold,
        triggerOnce: true,
    });
    const [slideRight, slideRightApi] = useSpring(() => ({
        from: { transform: `translateX(-${translateDistance}%)`, opacity: 0 },
        to: { transform: `translateX(0)`, opacity: 1 },
        config: { duration: animationDuration, easing: easings.easeOutSine },
        pause: true
    })); 

    const { ref: slideLeftIntersectionRef, inView: slideLeftInView } = useInView({
        threshold: observerThreshold,
        triggerOnce: true,
    });
    const [slideLeft, slideLeftApi] = useSpring(() => ({
        from: { transform: `translateX(${translateDistance}%)`, opacity: 0 },
        to: { transform: 'translateX(0)', opacity: 1 },
        config: { duration: animationDuration, easing: easings.easeOutSine },
        pause: true
    }));

    const { ref: slideUpIntersectionRef, inView: slideUpInView } = useInView({
        threshold: observerThreshold,
        triggerOnce: true,
    });
    const [slideUp, slideUpApi] = useSpring(() => ({
        from: { transform: `translateY(${translateDistance}%)`, opacity: 0 },
        to: { transform: 'translateY(0)', opacity: 1 },
        config: { duration: animationDuration, easing: easings.easeOutSine },
        pause: true
    }));

    useEffect(() => {
        if(slideRightInView) {
            slideRightApi.resume();
        }
        if(slideLeftInView) {
            slideLeftApi.resume();
        }
        if(slideUpInView) {
            slideUpApi.resume();
        }
    }, [slideRightInView, slideLeftInView, slideUpInView]);


    return (
        <div className="info-homePageInfo">
            <div onClick={() => {slideLeftApi.resume(); console.log("clicked")}} className="info-grid">
                <div className="info-animation-container" ref={slideRightIntersectionRef}>
                    <animated.div style={slideRight} className="info-row">
                        <div className="info-colorBox info-colorBox--one" />
                        <div className="info-textBox">Sample text for row 1</div>
                    </animated.div>
                </div>

                <div className="info-animation-container" ref={slideLeftIntersectionRef}>
                    {slideLeftInView && 
                    (<animated.div  style={slideLeft} className="info-row">
                        <div className="info-textBox">Sample text for row 2</div>
                        <div className="info-colorBox info-colorBox--two" />
                    </animated.div>)}   
                </div>

                <div className="info-animation-container" ref={slideUpIntersectionRef}>
                    {slideUpInView && 
                    (<animated.div style={slideUp} className="info-row">
                        <div className="info-colorBox info-colorBox--three" />
                        <div className="info-textBox">Sample text for row 3</div>
                    </animated.div>)}   
                </div>
            </div>
        </div>
    );
}

