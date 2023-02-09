import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import "./app/app.css";
import App from './app/app';
import { store } from './app/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider >
);
