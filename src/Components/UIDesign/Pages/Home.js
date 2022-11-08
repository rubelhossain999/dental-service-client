import Achievement from './Achievement';
import Feature from './Feature';
import Hero from './Hero';
import Teams from './Teams';
import ThreeService from './ThreeService';

const Home = () => {
    return (
        <div>
            <Hero />
            <Feature />
            <ThreeService></ThreeService>
            <Teams></Teams>
            <Achievement></Achievement>
        </div>
    );
};

export default Home;