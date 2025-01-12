import React from 'react';
import './loadingpage.css';
import loadingAnim from './logoanim_background.mov';

const Loadingpage = () => {
  return (
    <div className="loading-container">
        <video className="loading-video" autoPlay loop muted>
        <source src={loadingAnim} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Loadingpage;