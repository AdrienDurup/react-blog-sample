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
import ErrorBoundary from '../ErrorBoundary';

// data, styles et utilitaires
import useAjax from '../../hooks';

import './styles.scss';
import hostAPI from '../../data/hostAPI';


// == Composant
const Blog = () => {
  /* used fer zen mode */
  const [isZen, setIsZen] = useState(false);

  /* used for spinner state */
  const [postsLoading, setPostsLoading] = useState(false);

  // const [categories, setCategories] = useState([]);

  /* all posts, for the moment */
  const [currentPosts, setCurrentPosts] = useState([]);
  const [activeCategory, setActiveCategory] = useState({ label: 'Accueil', id: 1 });//active category at start

  /* Ajax handling */
  /* categories used for generating nav */
  const [categories, isCategoryLoading] = useAjax(`${hostAPI}/categories`);

  useEffect(async () => {
    getpostsFromAPI(activeCategory);
  }, [activeCategory]);

  const getpostsFromAPI = async (cat) => {
    const { label, id } = cat;
    let res = [];
    try {
      if (label === 'Accueil') {
        res = await axios.get(`${hostAPI}/posts`);
      }
      else {
        res = await axios.get(`${hostAPI}/posts/category/${id}`);
      };
      res = res.data;
      console.log("currentposts", res);
      setCurrentPosts(res);
    }
    catch (e) {
      console.error(e);
    }
    finally {
      setPostsLoading(false);
    }
    //const res = await axios.get(`${hostAPI}/posts`);
  };

  console.log("categories", categories, isCategoryLoading);

  if (isCategoryLoading) return <Spinner />;

  return (
    <div className="blog">
      <ErrorBoundary>
        <Header
          routes={categories}
          isZenState={[isZen, setIsZen]}
          isLoading={isCategoryLoading}
          setActiveCategory={setActiveCategory}
        />
        <Routes>
          {categories.map((el) => (
            <Route
              path={el.route}
              key={el.label}
              element={(
                <Posts
                  activeCategory={activeCategory}
                  categories={categories}
                  posts={currentPosts}
                  setActiveCategory={setActiveCategory}
                  isZen={isZen}
                  isLoading={postsLoading}
                // getPosts={getpostsFromAPI}
                // setPosts={setCurrentPosts}
                />
              )}

            />
          ))}
          <Route path="posts/:id" element={<FullPost />} />
          <Route path="/jquery" element={<Navigate replace to="/react" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
      <Footer />
    </div>
  );
};

// == Export
export default Blog;

//isLoadingState={[isLoading, setIsLoading]}
