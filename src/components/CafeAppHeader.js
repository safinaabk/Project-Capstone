import React from 'react';

function CafeAppHeader() {
  return (
    <div className="cafe-app__header">
      <h1>FIFE APPS.</h1>
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
            <a href="#/login">
              {' '}
              <b>LOGIN</b>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default CafeAppHeader;
