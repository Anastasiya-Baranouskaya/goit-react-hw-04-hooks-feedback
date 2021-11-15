import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positiveFeedbackPercentage,
}) {
  return (
    <div className={s.statistics}>
      <ul className={s.list}>
        <li className={s.list_item}>Good: {good}</li>
        <li className={s.list_item}>Neutral: {neutral}</li>
        <li className={s.list_item}>Bad: {bad}</li>
      </ul>
      <p className={s.total}>Total: {total}</p>
      <p>
        <span className={s.positive}>Positive feedback: </span>
        {total === 0 ? <p> 0% </p> : <p>{positiveFeedbackPercentage}</p>}
      </p>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positiveFeedback: PropTypes.number,
};
