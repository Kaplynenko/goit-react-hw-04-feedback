import React from 'react';
import css from './statistics.module.css';
import PropTypes from 'prop-types';
const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  positiveFeedbackPercentage,
}) => {
  return (
    <ul>
      <li className={css.stats}>Good:{good}</li>
      <li className={css.stats}>Neutral:{neutral}</li>
      <li className={css.stats}>Bad:{bad}</li>
      <li className={css.stats}>Total:{countTotalFeedback()}</li>
      <li className={css.statsPercent}>
        Positive feedback:
        <span className={css.percent}>{positiveFeedbackPercentage()}%</span>
      </li>
    </ul>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
  positiveFeedbackPercentage: PropTypes.func.isRequired,
};
export default Statistics;
