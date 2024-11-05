import "./index.css"
import React from 'react';


const Box = ({children}) => {
  return (
    <div className="hover-box">
      {children}
    </div>
  );
};

export default Box;