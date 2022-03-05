import React from "react";
import { Working } from "../../assets";
import "./Header.scss";
const Header = () => {
  return (
    <div className='app__header'>
      <div className='app__header-text'>
        <div className='header-text'>
          <h1>More than just shorter links</h1>
          <p>
            build your brands recognition and get detailed inshights on how your
            links are performing
          </p>

          <div className='text-button'>Get Started</div>
        </div>
      </div>
      <div className='app__header-img'>
        <img src={Working} alt='photo_header' />
      </div>
    </div>
  );
};

export default Header;