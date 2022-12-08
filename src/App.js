import React from 'react';
import { Routes, Link, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CafeAppJumbotron from './components/CafeAppJumbotron';
import { getInitialData } from './utils/index';
import ListCafes from './components/ListCafe';
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
              <a href="https://www.linkedin.com/in/safinabulan/" target="_blank">
                About Us
              </a>
            </li>
            <li>
              <a href="#/login">LOGIN</a>
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
// function App() {
//   const [cafes, setCafe] = useState([]);
//   useEffect(() => {
//     dbapi.collection('listcafe').onSnapshot((snapshot) => {
//       setCafe(snapshot.docs);
//     });
//   }, []);
//   return (
//     <div>
//       <CafeAppHeader />
//       <div className="main_body">
//         <CafeAppJumbotron />
//         <ListCafe cafes={cafes} />
//       </div>
//       <CafeAppFooter />
//     </div>
//   );
// }
// {

//   render() {
//     const [cafes, setCafe] = useState([]);
//     useEffect(() => {
//       dbapi.collection('listcafe').onSnapshot(snapshot);
//     }, []);
//     // const cafes = getInitialData();
//     return (
//       <div>
//         <CafeAppHeader />
//         <div className="main_body">
//           <CafeAppJumbotron />
//           <ListCafe cafes={cafes} />
//         </div>
//         <CafeAppFooter />
//       </div>
//     );
//   }
// }

export default App;