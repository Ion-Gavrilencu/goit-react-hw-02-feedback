import React from 'react';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={styles.statistics}>
    <p className={styles.statItem}>Good: {good}</p>
    <p className={styles.statItem}>Neutral: {neutral}</p>
    <p className={styles.statItem}>Bad: {bad}</p>
    <p className={styles.statItem}>Total: {total}</p>
    <p className={styles.statItem}>Positive feedback: {positivePercentage}%</p>
  </div>
);

export default Statistics;
