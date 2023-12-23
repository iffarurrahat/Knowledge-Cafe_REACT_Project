import PropTypes from 'prop-types';
import BookMark from '../BookMark/BookMark';
const BookMarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3">
            <p className="bg-[#6047ec1a] text-[#6047EC] border border-[#6047EC] text-2xl font-bold text-center py-3 rounded">Spent time on read : {readingTime} min</p>
            <div className="bg-[#6047ec1a] mt-6 p-7 rounded">
                <h2 className="text-2xl font-bold">Bookmarked Blogs: {bookmarks.length}</h2>
                {
                    bookmarks.map((bookmark, index) => <BookMark
                        key={index}
                        bookmark={bookmark}></BookMark>)
                }
            </div>
        </div>
    );
};

BookMarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired,
};

export default BookMarks;