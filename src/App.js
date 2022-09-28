import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { Artist } from './pages/Artist';
import { Home } from './pages/Home';
import { Header, Footer } from './layout/index'
import { Albums } from './pages/Albums';
import { Album } from './pages/Album';

const App = () => {
  const [red, setRed] = useState(0);
  useEffect(() => {
    const intervalID = setInterval(() => {
      setRed(red => (red + 1)%3 );
    }, 10000);
    return () => clearInterval(intervalID);
  }, []);

  return (
    <>
      <div style={{ backgroundImage: red === 0 ? 'url(malibu.jpg)' : red === 1 ? 'url(Four_Tet_-_Sixteen_Oceans.png)' : 'url(Bandana_freddie_gibbs.jpeg)', padding: '100px' }}>
        <div style={{ backgroundColor: red === 0 ? '#8bb988' : red === 1 ? '#505760' : '#252125', color: red === 0 ? '#af0f13' : red === 1 ? '#cbd3e0' : '#0a4b61', padding: '100px'}}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/artists" element={<Artist />}></Route>
            <Route path="/albums" element={<Albums />}></Route>
            <Route path="/albums/:album" element={<Album />}></Route>
            
          </Routes>


          <Footer />

        </div>

      </div>
    </>
  )
};

export default App;