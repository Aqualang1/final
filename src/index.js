import AppRouter from './router';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);