import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import App from '../App';
import Header from '../components/Header';
import Counter from '../features/Counter';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Outlet />
            </>
          }
        >
          <Route path="account" element={<App />} />
          <Route path="counter" element={<Counter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
