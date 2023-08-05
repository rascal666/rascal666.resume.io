import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './fonts/BadScript/BadScript-Regular.ttf'
import './fonts/BadScript/BadScript-Regular.svg'
import './fonts/BadScript/BadScript-Regular.woff2'
import './fonts/BadScript/BadScript-Regular.woff'

import './fonts/B612Mono/B612Mono-BoldItalic.ttf'
import './fonts/B612Mono/B612Mono-BoldItalic.svg'
import './fonts/B612Mono/B612Mono-BoldItalic.woff2'
import './fonts/B612Mono/B612Mono-BoldItalic.woff'

import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from './store/store'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
