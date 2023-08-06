import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import store from './store.ts';
import { Provider } from 'react-redux';
import App from './App.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import PrivateRoute from './components/PrivateRoute.tsx';
import HomeScreen from './screens/HomeScreen.tsx';
import LoginScreen from './screens/Login.tsx';
import RegisterScreen from './screens/RegisterScreen.tsx';
import ProfileScreen from './screens/ProfileScreen.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} element={<HomeScreen />}></Route>
      <Route path='/login' element={<LoginScreen />}></Route>
      <Route path='/register' element={<RegisterScreen />}></Route>
      <Route path='' element={<PrivateRoute />}>
        <Route path='/profile' element={<ProfileScreen />}></Route>
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
