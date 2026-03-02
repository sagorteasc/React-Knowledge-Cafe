import { space } from 'postcss/lib/list';
import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    const { title, img, author, author_img, date, readingtime, hashtags } = blog;
    return (
        <div className='py-8'>
            <img className='rounded-lg' src={img} alt="" />

            <div className='flex justify-between mt-10'>

                <div className='flex gap-6'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div>
                        <h4 className='font-bold text-xl'>{author}</h4>
                        <p className='font-semibold text-[rgba(17,17,17,0.6)]'>{date}</p>
                    </div>
                </div>

                <div>
                    <span className='text-[rgba(17,17,17,0.6)]'>{readingtime} min read</span>
                </div>

            </div>

            <h3 className='text-4xl font-bold py-4'>{title}</h3>

            <p>
                {
                    hashtags.map((hashtag, idx) => <span key={idx}><a href="">{hashtag}</a></span>)
                }
            </p>

            <button className='btn text-[#6047EC] font-semibold text-xl'><u>Mark as read</u></button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;