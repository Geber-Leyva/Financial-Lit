//import { useState } from 'react';
import React from 'react'
import './Topics.css'
//import Topics from './TopicPage'


const TopicCard = ({topic:{id, name, image}}) => {
  //  const [topicSelected, setTopicSelected] = useState(0);

    function handleClick(){
        <div>
            <span>{name}</span>
        </div>
           
       
        alert(id)

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