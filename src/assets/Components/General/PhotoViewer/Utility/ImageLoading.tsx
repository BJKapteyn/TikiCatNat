import { animated, useSpring} from 'react-spring';
import './ImageLoading.css';

export const ImageLoading: React.FC = () => {

    const [standinAnimation] = useSpring(() => ({
        from: { backgroundColor: '#979797' },
        to: [{ backgroundColor: '#666666' }, { backgroundColor: '#979797' }],
        config: { duration: 1000 },
        loop: true
    }));

    return (
        <animated.div
            style={standinAnimation}
            className="image-loading-standin"
        />  
    );
};