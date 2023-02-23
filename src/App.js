import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Footer from './components/footer';
import Navbar from './components/navbar';
import AddThreads from './pages/AddThreads';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';

function App() {
  const {
    authUser = null,
    isPreload = false,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);


  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return null;
  }
  
  if (authUser === null){
    return(
      <>
        <main className="content">
          <Routes>
            <Route path="/*" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </>
    )
  }
  return (
    <>
      <header>
        <Navbar authUser={authUser} signOut={onSignOut}/>
      </header>
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/addThread" element={<AddThreads />} />
        </Routes>
      </main>
      
    </>
  );
}

export default App;
