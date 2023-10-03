import React from 'react'
import './Calculator.css'

export default function Calculator() {
  return (
    <div>
        <h2>Simple Calculators</h2>
            <div className= 'wholeCalculator'>
                
                <div className='calculator'>
                    <text>Simple Loan/Interest Calculator</text>
                    <label>Principl(P): $<input type="number"/></label>
                    <label>Rate (R): %<input type="number"/></label>
                    <label>Time (t): %<input type="number"/></label>
                    <button>Interest</button>
                    <button>Loan</button>
                </div>
                <div className='calculator'>
                    <text>Loan:  </text>
                    <text>Interest:  </text>
                </div>
            
        </div>
    </div>
  )
}
