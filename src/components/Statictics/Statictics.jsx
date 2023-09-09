import React from 'react';
import PropTypes from 'prop-types';
import { StatistUl, Statistli } from './Statictics.styled';

const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <StatistUl>
      <Statistli>
        <p>good= {good}</p>
      </Statistli>
      <Statistli>
        <p>neutral= {neutral}</p>
      </Statistli>
      <Statistli>
        <p>bad= {bad}</p>
      </Statistli>
      <Statistli>
        <p>total= {total}</p>
      </Statistli>
      <Statistli>
        <p>positivePercentage= {percentage}%</p>
      </Statistli>
    </StatistUl>
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
