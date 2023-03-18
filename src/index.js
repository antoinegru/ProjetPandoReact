import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/*on met sur notre conteneur root notre app qu'on a créé au préalable*/}
  </React.StrictMode>
);

