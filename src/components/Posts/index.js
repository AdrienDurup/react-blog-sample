import { useEffect } from 'react';
import Post from 'src/components/Post';
import PropTypes from 'prop-types';
import './styles.scss';

import hostAPI from '../../data/hostAPI';
import axios from 'axios';
import Spinner from '../Spinner';


const Posts = ({ isZen, isLoading, posts, categories }) => {
  console.log('test', posts);

  if (isLoading) return <Spinner />;

  return (
    <main className="posts">
      <h1 className={isZen ? 'posts-title --zen-mode' : 'posts-title'}>Dev Of Thrones</h1>
      <div className={isZen ? 'posts-list --zen-mode' : 'posts-list'}>
        {posts.map((el) => (
          <Post {...el} key={el.slug} isZen={isZen} categories={categories} />
        ))}
      </div>
    </main>
  );
};

Posts.propTypes = {
  isZen: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  categories: PropTypes.array.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    category_id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
  })).isRequired,
};

export default Posts;
