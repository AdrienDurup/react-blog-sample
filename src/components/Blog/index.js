// Composants
import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';

// data, styles et utilitaires
import categoriesData from 'src/data/categories';
import postsData from 'src/data/posts';
import './styles.scss';

// == Composant
const Blog = () => {
  console.log(categoriesData);
  console.log(postsData);

  return (
    <div className="blog">
      <Header />
      <Posts />
      <Footer />
    </div>
  );
};

// == Export
export default Blog;
