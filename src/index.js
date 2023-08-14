import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Login from './containers/Login/Login'
// import ProductTable from './containers/ProductTable/ProductTable';
// import ProductsPreview from './containers/ProductsPreview/ProductsPreview';

function App() {
  return (
    <div className="App">
      <Login />
      {/* <ProductTable /> */}
      {/* <ProductsPreview /> */}
    </div>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
