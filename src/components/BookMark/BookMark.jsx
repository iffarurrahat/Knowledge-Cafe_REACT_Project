import PropTypes from 'prop-types';

const BookMark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <>
            <h2 className="bg-white text-lg mt-3 mb-1 p-5 rounded">{title}</h2>
        </>
    );
};

BookMark.propTypes = {
    bookmark: PropTypes.object.isRequired,
};

export default BookMark;