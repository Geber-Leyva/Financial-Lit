import React from 'react'
import budg from './pictures/budget.jpg'
import sav from './pictures/save.jpg'
import cred from './pictures/credit.jpg'
import pf from './pictures/personalfinance.jpeg'
import deb from './pictures/debt.png'
import invest from './pictures/investing.jpg'
import './Topics.css'
import TopicCard from './TopicCard'


const topics= [
  {id: 1 , name: "Budget", image :budg,}, 
  {id: 2 , name: "Save", image: sav,}, 
  {id: 3 , name: "Personal Finance", image: pf,}, 
  {id: 4 , name : "Credit", image: cred,}, 
  {id: 5 , name : "Debt/Loan", image : deb,},
  {id: 6, name: "Investing", image: invest},
]

export default function Topics() {

  return(

    <div className='container'>
      
      {topics.map((topic) => (
        <TopicCard topic = {topic} />
      ))}
    </div>
  );
}
