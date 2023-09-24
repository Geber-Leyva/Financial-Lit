import React from 'react'
import budg from '../public/budget.jpg'
import sav from '../public/save.jpg'
import cred from '../public/credit.jpg'
import pf from '../public/personalfinance.jpeg'
import deb from '../public/debt.png'


const budget = {
    name: "Budget",
    image :budg,
}
const save = {
    name: "Save",
    image: sav,
}

const personalFinance= {
    name: "Personal Finance",
    image: pf,
}

const credit = {
    name : "Credit",
    image: cred,
}

const debtLoan = {
    name : "Debt/Loan",
    image : deb,
}

export default function topics() {

  return (
    <div className='container'>
        <div className='topic'>
          <div>
            <p>{budget.name}</p>
          </div>
          <div>
            <img src={budget.image}></img>
          </div>
        </div>

      </div>
  )
}
