import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// == Import : local
// Composants
import Blog from 'src/components/Blog';

// == Render
// 1. Le composant racine (celui qui contient l'ensemble de l'app)
const rootComponent = <Router><Blog /></Router>;
// const rootComponent = <Blog />;

// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');
// Le rendu de React => DOM
render(rootComponent, target);
