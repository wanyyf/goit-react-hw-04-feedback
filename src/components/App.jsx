import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import { useState } from 'react';
const options = [
  {
    id: 'good',
    title: 'Good',
    type: 'button',
  },
  {
    id: 'neutral',
    title: 'Neutral',
    type: 'button',
  },
  {
    id: 'bad',
    title: 'Bad',
    type: 'button',
  },
];
export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const state = { good, neutral, bad };

  const onBtnClickCount = evt => {
    const { name } = evt.currentTarget;

    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return Object.values(state).reduce((acc, currentValue) => {
      return (acc += currentValue);
    }, 0);
  };
  const countPositiveFeedbackPercentage = () => {
    const posFeedback =
      Math.round((state.good / countTotalFeedback()) * 100) || '0';
    return posFeedback;
  };

  return (
    <div>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions onLeaveFeedback={onBtnClickCount} options={options} />
      </Section>
      {Object.values(state).every(el => el === 0) ? (
        <Notification message={'There is no feedback'} />
      ) : (
        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}
    </div>
  );
}
// test
