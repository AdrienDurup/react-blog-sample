import Post from 'src/components/Post';
import PropTypes from 'prop-types';
import './styles.scss';

const Posts = ({ posts, isZen }) => {
  console.log('test', isZen);
  return (
    <main className="posts">
      <h1 className="posts-title">Dev Of Thrones</h1>
      <div className={isZen ? 'posts-list --column' : 'posts-list'}>
        {posts.map((el) => (
          <Post {...el} key={el.id} isZen={isZen} />
        ))}
      </div>
    </main>
  );
};

Posts.propTypes = {
  isZen: PropTypes.bool.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
  })).isRequired,
};

export default Posts;
