import './styles.scss';
import PropTypes from 'prop-types';

const Post = ({ title, category, excerpt, isZen }) => (
  <article className={isZen ? 'post --is-zen' : 'post'}>
    <h2 className="post-title">{title}</h2>
    <div className="post-category">{category}</div>
    <p className="post-excerpt">{excerpt}</p>
  </article>
);
Post.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  isZen: PropTypes.bool.isRequired,
};

export default Post;
