import Counter from './Counter/Counter';
import Header from './Header/Header';
import Modal from './Modal/Modal';
import { Component } from 'react';
import TodoList from './TodoList/TodoList';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statictics/Statictics';
import Section from './Section/Section';
import Notificationcount from './Counter/Notification/Notification';

class App extends Component {
  state = {
    isShowModal: false,
    good: 0,
    neutral: 0,
    bad: 0,
  };

  toggleModal = () => {
    this.setState(prev => ({ isShowModal: !prev.isShowModal }));
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
        <Header toggleModal={this.toggleModal} />
        <Counter />
        {this.state.isShowModal && (
          <Modal toggleModal={this.toggleModal}>Text for Modal</Modal>
        )}
        <TodoList />
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
// export const App = () => {
//   return (
//     <div
//     style={{
//       height: '100vh',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       fontSize: 40,
//       color: '#010101',
//     }}
//     >
//       <Counter />
//       <Header />
//       <Modal></Modal>
//     </div>
//   );
// };
