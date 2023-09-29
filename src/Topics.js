import React from 'react'
import budg from './pictures/budget.jpg'
import sav from './pictures/save.jpg'
import cred from './pictures/credit.jpg'
import pf from './pictures/personalfinance.jpeg'
import deb from './pictures/debt.png'
import './Topics.css'


const topics= [
  {name: "Budget", image :budg,}, 
  {name: "Save", image: sav,}, 
  {name: "Personal Finance", image: pf,}, 
  {name : "Credit", image: cred,}, 
  {name : "Debt/Loan", image : deb,}
]



export default function Topics() {
  const listTopics = topics.map(topic =>
    <div className='container'>
        <div className='topic'>
          <div>
            <p>{topic.name}</p>
          </div>
          <div>
          <img src={topic.image !== "N/A" ? topic.image : "https://via.placeholder.com/400"} alt={topics.image} />
          </div>
        </div>

      </div>
    );
  return (
    <ul>{listTopics}</ul>
    
  );
}
