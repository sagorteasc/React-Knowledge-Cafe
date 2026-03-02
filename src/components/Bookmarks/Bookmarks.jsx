import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types';

const Bookmarks = ({ bookmarks }) => {
    return (
        <div className="bg-gray-300 mt-8 rounded-lg md:w-1/3">
            <h2 className="text-center font-bold text-2xl pt-8">Bookmarked Blogs : {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark
                    key={bookmark.id}
                    bookmark={bookmark}
                ></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired
}

export default Bookmarks;