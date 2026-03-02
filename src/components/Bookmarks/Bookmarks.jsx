import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types';

const Bookmarks = ({ bookmarks, readingtime }) => {
    return (
        <div className="bg-gray-300 mt-8 rounded-lg md:w-1/3">
            <div className="border-[#6047EC] border-2 rounded-lg">
                <h3 className="font-bold text-2xl text-[#6047EC] px-10 py-5">Spent Time On Read : {readingtime} min {bookmarks.readingtime}</h3>
            </div>
            <h2 className="text-center font-bold text-2xl pt-8">Bookmarked Blogs : {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark
                    key={idx}
                    bookmark={bookmark}
                ></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingtime: PropTypes.number
}

export default Bookmarks;