import React from 'react'
import HistoryProducts from '../HistoryProducts/HistoryProducts'
import styles from './HistoryComponent.module.css';

const HistoryComponent = () => {
  return (
    <div className={styles.HistoryComponent}>
      <div className={styles.historyHeader}>
        <h2>Your Order History</h2>
      </div>
      <hr/>
      <div className={styles.allProducts}>
          <HistoryProducts/>
      </div>
    </div>
  )
}

export default HistoryComponent