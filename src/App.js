import React, { useState } from 'react';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Notification from './components/Notification/Notification';

import './App.css';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = e => {
    const { name } = e.target;
    switch (name) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        return;
    }
  };

  const totalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const positiveFeedbackPercentage = () => {
    const positiveFeedback = Math.round((good / totalFeedback()) * 100) + '%';
    return positiveFeedback;
  };

  return (
    <div className="container">
      <Section>
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={addFeedback}
        />
      </Section>
      <Section title="Statistics">
        {totalFeedback() === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback()}
            positiveFeedbackPercentage={positiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
}
