import PropTypes from 'prop-types';

const Container = ({ children }) => {
    return (
        <div className="w-full max-w-[1280px] px-[25px] mx-auto">{children}</div>
    );
};

export default Container;


Container.propTypes = {
    children: PropTypes.object.isRequired
};