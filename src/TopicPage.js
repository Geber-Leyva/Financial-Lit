import React from 'react'

const TopicPage = ({topicSelected:{ id, name,image}}) => {
  return (
    <div>
        <div>
            <img src={image !== "N/A" ? image : "https://via.placeholder.com/400"} alt={image} />
        </div>
        <div>
            <span>{name}</span>
            <span>{id}</span>
        </div>
    </div>
  );
}
export default TopicPage;