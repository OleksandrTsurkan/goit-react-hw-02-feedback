import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <ul>
      <li>
        <p>good= {good}</p>
      </li>
      <li>
        <p>neutral= {neutral}</p>
      </li>
      <li>
        <p>bad= {bad}</p>
      </li>
      <li>
        <p>total= {total}</p>
      </li>
      <li>
        <p>positivePercentage= {percentage}%</p>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
