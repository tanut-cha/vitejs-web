import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/fonticon/fonticon.css'
import './assets/keenicons/duotone/style.css'
import './assets/keenicons/outline/style.css'
import './assets/keenicons/solid/style.css'
import './assets/sass/style.scss'
import './assets/sass/plugins.scss'
import './assets/sass/style.react.scss'
import {AppRoutes} from './routing/AppRoutes';
import { Provider } from "react-redux";
import { rootReducer } from '../redux/reducers/rootReducer';
import { applyMiddleware, createStore } from "redux";
import { thunk } from 'redux-thunk';
import { AuthProvider } from './core/Auth';

const middlewares = [thunk]
const store = createStore(rootReducer, applyMiddleware(...middlewares))
const container = document.getElementById("root");

if (container) {
  console.log('555555555555555555');
  ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
      <Provider store={store}>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </Provider>
    // </React.StrictMode>,
  )
}
