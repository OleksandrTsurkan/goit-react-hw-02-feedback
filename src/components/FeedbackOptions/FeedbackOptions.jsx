import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackLi, FeedbackList } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackList>
      {options.map(option => (
        <li key={option}>
          <FeedbackLi onClick={() => onLeaveFeedback(option)}>{option}</FeedbackLi>
        </li>
      ))}
    </FeedbackList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};


export default FeedbackOptions;