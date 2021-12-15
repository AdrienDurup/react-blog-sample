// REACT
import { useState, useEffect } from 'react';

// Axios
import axios from 'axios';

// Router modules
import { Routes, Route, Navigate } from 'react-router-dom';

// Composants
import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';
import NotFound from 'src/components/NotFound';
import FullPost from '../FullPost';
import Spinner from '../Spinner';

// data, styles et utilitaires
import postsData from 'src/data/posts';

import './styles.scss';
import hostAPI from '../../data/hostAPI';


// == Composant
const Blog = () => {
  /* used fer zen mode */
  const [isZen, setIsZen] = useState(false);
  /* used for spinner state */
  const [isLoading, setIsLoading] = useState(false);
  /* categories used for generating nav */
  const [categories, setCategories] = useState([]);
  /* all posts, for the moment */
  const [currentPosts, setCurrentPosts] = useState([]);

  useEffect(async () => {
    try {
      if (categories.length === 0) {
        const cat = await getCategories();
        setCategories(cat);
      };
    }
    catch (e) {
      console.error(e);
    };
  });

  useEffect(async () => {
    try {
      if (isLoading) {
        // await setTimeout(async () => {
        let posts = await getpostsFromAPI();
        setCurrentPosts(posts);
        setIsLoading(false);
        // }, 500);
      }
    }
    catch (e) {
      console.error(e);
    };
  });

  async function getCategories() {
    let cat = [];
    cat = await axios.get(`${hostAPI}/categories`);
    return cat.data;
  }

  const getpostsFromAPI = async () => {
    // const getpostsFromAPI = async (label) => {
    // requete axios
    const res = await axios.get(`${hostAPI}/posts`);
    // let res = [];
    // if (label === 'Accueil') {
    //   res = await axios.get(`${hostAPI}/posts`);
    // }
    // else {
    //   res = await axios.get(`${hostAPI}/posts/category/${1}`);
    // };
    // console.log("request", res.data);
    // currentPosts = res.data;
    return res.data;
  }

  const getFilteredPosts = (cat) => {
    const filtered = currentPosts.filter((el) => el.category_id === cat.id);
    /* if can’t find an article relative to asked category, return all */
    return filtered.length !== 0 ? filtered : currentPosts;
  };

  console.log("categories", categories, "isZen", isZen);

  if (!categories) return <Spinner isLoading={isLoading} />;

  return (
    <div className="blog">
      <Header routes={categories} isZenState={[isZen, setIsZen]} isLoadingState={[isLoading, setIsLoading]} />
      <Routes>
        {categories.map((el) => (
          <Route path={el.route} key={el.label} element={
            <Posts category={el} posts={getFilteredPosts(el)} isZen={isZen} isLoading={isLoading} getPosts={getpostsFromAPI} setPosts={setCurrentPosts} />} />
        ))}
        <Route path="posts/:id" element={<FullPost />} />
        <Route path="/jquery" element={<Navigate replace to="/react" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

// == Export
export default Blog;
