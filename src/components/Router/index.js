// import router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//= ====import route data=======
// import routesData from '../../data/categories';
import { elements } from '../../routes';
import routes from '../../routes/routes';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((el) => (
          <Route path={el.path} key={el.key} element={elements[el.elementName]()} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
