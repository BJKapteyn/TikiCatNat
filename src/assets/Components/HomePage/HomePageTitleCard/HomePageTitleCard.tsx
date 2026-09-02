import { animated, useSpring } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import './HomePageTitleCard.css';

export const HomePageTitleCard: React.FC = () => {
    const [fadeIn, fadeInApi] = useSpring(() => ({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 1000 },
        pause: true
    }));

     const [fadeIn2, fadeInApi2] = useSpring(() => ({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 1000 },
        pause: true
    }));

    const { ref: topTextRef, inView: topTextInView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const { ref: bottomTextRef, inView: bottomTextInView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });
    
    useEffect(() => {
        if (topTextInView) {
            fadeInApi.resume();
        }
        if (bottomTextInView) {
            fadeInApi2.resume();
        }
    }, [topTextInView, bottomTextInView]);

    return (
        <section className="home-page-title-card" aria-label="Photography studio banner">
            <div className="home-page-title-card__content">
                <animated.span style={fadeIn} ref={topTextRef} className="home-page-title-card__text home-page-title-card__text--top-left">
                    Photography
                </animated.span>
                <animated.span style={fadeIn2} ref={bottomTextRef} className="home-page-title-card__text home-page-title-card__text--bottom-right">
                    Studio
                </animated.span>
            </div>
        </section>
    );
};
