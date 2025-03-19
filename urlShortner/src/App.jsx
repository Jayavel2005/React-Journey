import React, { useState, useEffect } from 'react';
import SignUp from './SignUp';
import Login from './Login';
import Background from './Background';
import UrlShortner from './UrlShortner';
import Preloader from './Preloader';

const App = () => {
  const [page, setPage] = useState("Login");
  const [loading, setLoading] = useState(true); // New state for loading

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  const pageRendering = () => {
    if (page === "Login") return <Login setPage={setPage} />;
    if (page === "SignUp") return <SignUp setPage={setPage} />;
    return <UrlShortner setPage={setPage} />;
  };

  return (
    <div className="main">
      <Background />
      {loading ? <Preloader /> : pageRendering()}
    </div>
  );
};

export default App;
