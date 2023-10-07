import React from 'react'
import budget from './pictures/budget.jpg'
import saving from './pictures/save.jpg'
import credit from './pictures/credit.jpg'
import personalFinance from './pictures/personalfinance.jpeg'
import debt from './pictures/debt.png'
import invest from './pictures/investing.jpg'
import './Topics.css'
import TopicCard from './TopicCard'


const topics= [
  {id: 1 , name: "Budget", image :budget,}, 
  {id: 2 , name: "Save", image: saving,}, 
  {id: 3 , name: "Personal Finance", image: personalFinance,}, 
  {id: 4 , name : "Credit", image: credit,}, 
  {id: 5 , name : "Debt/Loan", image : debt,},
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
