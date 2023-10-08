import React from 'react';
import './Topics.css';
import { useLocation } from 'react-router-dom';

function Next_Window() {
  const location = useLocation();
  const { name, image, info} = location.state;
  const infoLines = info.split('\n');

  return (
    <div className='wholeApp'>
        <div className='name-and-image'>
            <h1 className='centered'>{name}</h1>
            <img src={image} alt={name} className='profile-image' />
        </div>
      <div className='info-container'>
        {infoLines.map((line, index) => (
          <p key={index}className='info-paragraph'>{line}</p>
        ))}
      </div>
    </div>
  );
}

export default Next_Window;

