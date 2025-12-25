import { useState } from 'react';
import './App.css';
import Router from './assets/components/Router';

function App() {
  const [path, setPath] = useState(window.location.pathname);

  // Listen for navigation events
  function navigate(newPath) {
    setPath(newPath);
    window.history.pushState({}, '', newPath);
  }

  // Listen for browser back/forward
  window.onpopstate = () => setPath(window.location.pathname);

  return <Router path={path} navigate={navigate} />;
}

export default App;
