import { useEffect } from 'react';
import Post from 'src/components/Post';
import PropTypes from 'prop-types';
import './styles.scss';

import hostAPI from '../../data/hostAPI';
import axios from 'axios';
import Spinner from '../Spinner';


const Posts = ({ isZen, isLoading, posts }) => {
  // function getFilteredPosts(label) {
  //   const filtered = postsData.filter((el) => (el.category === label));
  //   return filtered.length !== 0 ? filtered : postsData;
  // }
  //  let currentPosts = [];
  // await getPosts(category.id);
  // getCurrentPosts();

  // if(posts.length===0)return <Spinner isLoading={true} />;

  // useEffect(
  //   async () => {
  //     if(category){
  //       const posts=await getPosts(category.id);
  //       console.log(posts);
  //     // setPosts(posts);
  //     };
  //   }
  // );

  console.log('test', isZen, isLoading);
  return (
    <main className="posts">
      <h1 className={isZen ? 'posts-title --zen-mode' : 'posts-title'}>Dev Of Thrones</h1>
      <div className={isZen ? 'posts-list --zen-mode' : 'posts-list'}>
        <Spinner isLoading={isLoading} />
        {posts.map((el) => (
          <Post {...el} key={el.slug} isZen={isZen} />
        ))}
      </div>
    </main>
  );
};

Posts.propTypes = {
  isZen: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    category_id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
  })).isRequired,
};

export default Posts;
