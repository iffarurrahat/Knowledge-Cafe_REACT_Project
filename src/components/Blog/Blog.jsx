import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";


const Blog = ({ blog, handleBookmarks, handleMarkAsRead }) => {
    const { id, title, cover, author, author_img, reading_time, posted_date, hashtags } = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-4 rounded' src={cover} alt={`Cover Picture of the title ${title}`} />
            <div className='flex justify-between mb-6'>
                <div className='flex items-center gap-5'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h4 className='text-2xl font-bold'>{author}</h4>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <p className='flex gap-1 items-center'>{reading_time} min red
                    <button onClick={() => handleBookmarks(blog)}><FaRegBookmark className="h-5 w-5 text-blue-500" />
                    </button>
                </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">{title}</h2>
            <div className='flex gap-5'>
                {
                    hashtags.map((tag, idx) => <span key={idx}>#{tag}</span>)
                }
            </div>
            <button onClick={() => handleMarkAsRead(reading_time, id)} className='underline text-blue-600 font-bold'>Mark as Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
};

export default Blog;

