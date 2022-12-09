import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CafeAppFooter from './components/CafeAppFooter';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>FIFE.</h1>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="https://github.com/safinaabk/Project-Capstone" target="_blank">
                About Us
              </a>
            </li>
            <li>
              <a href="https://wa.me/6285162525699?text=Halo%20selamat%20pagi,%20saya%20ingin%20reservasi" target="_blank">
                reservasi
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {/* <div className="jumbotron">
          <img src="/images/jumbotron.png" alt="" width="100%" />
          <h1 className="jumbo_title">WELCOME TO FIND CAFE</h1>
          <h2 className="jumbo_desc">Disini Kami menyediakan berbagai macam tempat cafe terbaik yang ada di Kota Bandung</h2>
        </div> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cafes/:id" element={<DetailPage />} />
          <Route path="*" element={'Notfound'} />
        </Routes>
        <CafeAppFooter />
      </main>
    </div>
  );
}

export default App;
