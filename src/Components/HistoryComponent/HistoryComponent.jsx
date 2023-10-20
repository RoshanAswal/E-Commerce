import React from 'react'
import HistoryProducts from '../HistoryProducts/HistoryProducts'
import './HistoryComponent.css';

const HistoryComponent = () => {
  return (
    <div className='HistoryComponent'>
      <div className='historyHeader'>
        <h2>Your Order History</h2>
      </div>
      <hr/>
      <div className='all-products'>
          <HistoryProducts/>
      </div>
    </div>
  )
}

export default HistoryComponent