import PropTypes from 'prop-types';
import { LuBookmark } from "react-icons/lu";

const Blog = ({ blog, handleAddToBookmark, handleAddToMarkAsRead }) => {
    const { id, title, img, author, author_img, date, readingtime, hashtags } = blog;
    return (
        <div className='py-8'>
            <img className='rounded-lg w-full' src={img} alt="" />

            <div className='flex justify-between mt-10'>

                <div className='flex gap-6'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div>
                        <h4 className='font-bold text-xl'>{author}</h4>
                        <p className='font-semibold text-[rgba(17,17,17,0.6)]'>{date}</p>
                    </div>
                </div>

                <div className='flex items-center gap-2'>
                    <span className='text-[rgba(17,17,17,0.6)]'>{readingtime} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='text-red-600'><LuBookmark></LuBookmark></button>
                </div>

            </div>

            <h3 className='text-4xl font-bold py-4'>{title}</h3>

            <p>
                {
                    hashtags.map((hashtag, idx) => <span key={idx}><a href="">{hashtag}</a></span>)
                }
            </p>

            <button onClick={() => handleAddToMarkAsRead(id, readingtime)} className='btn text-[#6047EC] font-semibold text-xl'><u>Mark as read</u></button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleAddToMarkAsRead: PropTypes.func.isRequired
}

export default Blog;