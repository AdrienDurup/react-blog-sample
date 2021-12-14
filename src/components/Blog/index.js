// REACT
import { useState } from 'react';

// Composants
import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';

// data, styles et utilitaires
// import categoriesData from 'src/data/categories';
import routes from '../../routes/routes';
import postsData from 'src/data/posts';
import './styles.scss';

// == Composant
const Blog = () => {
  const [state, setState] = useState({
    isZen: false,
  });
  const { isZen } = state;

  return (
      <div className="blog">
        <Header routes={routes} mainState={[state, setState]} />
        <Posts posts={postsData} isZen={isZen} />
        <Footer />
      </div>
  );
};

// == Export
export default Blog;
