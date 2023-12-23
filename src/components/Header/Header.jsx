import Profile from '../../assets/images/profile.png'
import Container from '../ui/Container';

const Header = () => {
    return (
        <Container>
            <header className='flex justify-between items-center py-4'>
                <h1 className='text-3xl md:text-4xl font-bold'>Knowledge Cafe</h1>
                <img src={Profile} alt="" />
            </header>
        </Container>
    );
};

export default Header;