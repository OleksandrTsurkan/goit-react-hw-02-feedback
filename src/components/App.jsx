import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statictics/Statictics';
import Section from './Section/Section';
import Notificationcount from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback() {
    const { good, bad, neutral } = this.state;
    const total = good + bad + neutral;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const positivePercentage =
      (this.state.good / this.countTotalFeedback()) * 100;

    return Math.round(positivePercentage);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            // options={['good', 'neutral', 'bad']}
            options={[...Object.keys(this.state)]}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics"></Section>{' '}
        {total === 0 ? (
          <Notificationcount message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percentage={positivePercentage}
          />
        )}
      </>
    );
  }
}

export default App;
