import './styles.scss';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import postsData from '../../data/posts';
import { useParams } from 'react-router-dom';

const FullPost = () => {

  const { id } = useParams();

  const post = postsData.find((el) => {
    console.log(el.id.toString(),id);
    return el.id.toString() === id;
  });

  if(!post) return <Navigate to="/404" />;

  const { title, category, excerpt, isZen } = post;

  return (
    <article className={isZen ? 'post --zen-mode' : 'post'}>
      <h2 className="post-title">{title}</h2>
      <div className="post-category">{category}</div>
      <p className="post-excerpt">{excerpt}</p>
    </article>
  );
};
// FullPost.propTypes = {
//   title: PropTypes.string.isRequired,
//   category: PropTypes.string.isRequired,
//   excerpt: PropTypes.string.isRequired,
//   isZen: PropTypes.bool.isRequired,
// };

export default FullPost;
