import React from 'react';
import './Topics.css';
import { useLocation } from 'react-router-dom';

function Next_Window() {
  const location = useLocation();
  const { id, name, image, info } = location.state;

  return (
    <div className='wholeApp'>
      <p>{info}</p>
    </div>
  );
}

export default Next_Window;
