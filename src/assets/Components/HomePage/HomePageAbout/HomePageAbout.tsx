import { useEffect } from 'react';
import { animated, useSpring } from 'react-spring';
import { easings } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import './HomePageAbout.css';

export const HomePageAbout: React.FC = () => {
    const animationDuration = 650;

    const { ref: sectionRef, inView: sectionInView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });
    const [firstCardSpring, firstCardSpringApi] = useSpring(() => ({
        from: { transform: 'translateX(-48px)', opacity: 0 },
        to: { transform: 'translateX(0)', opacity: 1 },
        config: { duration: animationDuration, easing: easings.easeOutSine },
        pause: true,
    }));

    const [secondCardSpring, secondCardSpringApi] = useSpring(() => ({
        from: { transform: 'translateX(48px)', opacity: 0 },
        to: { transform: 'translateX(0)', opacity: 1 },
        config: { duration: animationDuration, easing: easings.easeOutSine },
        pause: true,
    }));

    useEffect(() => {
        if (sectionInView) {
            firstCardSpringApi.resume();
            secondCardSpringApi.resume();
        }
    }, [sectionInView, firstCardSpringApi, secondCardSpringApi]);

    return (
        <section ref={sectionRef} className="homepage-about">
            <div className="homepage-about__cards">
                <animated.div
                    style={firstCardSpring}
                    className="homepage-about__card"
                >
                    <h2>Photography with feeling</h2>
                    <p>
                        We capture the genuine moments, thoughtful details, and
                        little in-between expressions that make your story yours.
                    </p>
                </animated.div>
                <animated.div
                    style={secondCardSpring}
                    className="homepage-about__card"
                >
                    <h2>Made to be remembered</h2>
                    <p>
                        From our first conversation to the finished gallery,
                        we make the experience personal, relaxed, and all about you.
                    </p>
                </animated.div>
            </div>
        </section>
    );
};
