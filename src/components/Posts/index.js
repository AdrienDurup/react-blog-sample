import Post from 'src/components/Post';

import './styles.scss';

const Posts = () => (
  <main className="posts">
    <h1 className="posts-title">Dev Of Thrones</h1>
    <div className="posts-list">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  </main>
);

export default Posts;
