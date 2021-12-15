import './styles.scss';
import PropTypes from 'prop-types';
// import axios from 'axios';
import { Link } from 'react-router-dom';

const Post = ({ title, category, excerpt, isZen, id }) => {
  // const Post = ({ id }) => {
  console.log("id",id);
  // const post=axios.get();
  return(
  <article className={isZen ? 'post --zen-mode' : 'post'}>
    <Link to={`/posts/${id}`}>
      <h2 className="post-title">{title}</h2>
    </Link>
    <div className="post-category">{category}</div>
    <p className="post-excerpt">{excerpt}</p>
  </article>

)};
Post.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.object,
  excerpt: PropTypes.string.isRequired,
  isZen: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  // path: PropTypes.string.isRequired,
};

export default Post;
