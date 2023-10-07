import React from 'react'
import './Topics.css'
import { useNavigate } from "react-router-dom"


const TopicCard = ({topic:{id, name, image}}) => {
  const navigate = useNavigate();
    function handleClick(){ 
     navigate('/NextWindow');
 
    }
    return(
        <button onClick= {handleClick} className='topic' key={id} >
          <div>
            <img src={image !== "N/A" ? image : "https://via.placeholder.com/400"} alt={image} />
          </div>
          <div>
            <span>{name}</span>
          </div>
        </button>
    );
}

export default TopicCard;