import './styles.scss';
import PropTypes from 'prop-types';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import { sanitize } from '../../tools';

const Post = ({ title, categories, category_id, excerpt, isZen, id }) => {
  // const Post = ({ id }) => {
  console.log("id",id);
  // const post=axios.get();

  const categoryLabel=categories.find((cat)=>{return cat.id === category_id}).label;

  return(
  <article className={isZen ? 'post --zen-mode' : 'post'}>
    <Link to={`/posts/${id}`}>
      <h2 className="post-title">{title}</h2>
    </Link>
    <div className="post-category">{categoryLabel}</div>
    <p className="post-excerpt" dangerouslySetInnerHTML={{__html:sanitize(excerpt,{USE_PROFILES: {html: true,}})}} />
  </article>

)};
Post.propTypes = {
  title: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  excerpt: PropTypes.string.isRequired,
  isZen: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  category_id: PropTypes.number.isRequired,
  // path: PropTypes.string.isRequired,
};

export default Post;
