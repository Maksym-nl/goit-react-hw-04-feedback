// import React, { Component } from 'react';
import { Feedback } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistic';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { useState } from 'react';

export const Appnew = () => {
  const [good, setGood] = useState([0]);
  const [neutral, setNeutral] = useState([0]);
  const [bad, setBad] = useState([0]);

  const handleClick = () => option => {
    switch (option) {
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
    // const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.ceil((good / total) * 100) || 0;
  };

  //   const { good, neutral, bad } = state;
  const total = countTotalFeedback();
  const positiveFeedbackPercentage = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title="Feedback">
        <Feedback
          options={['good', 'bad', 'neutral']}
          handleClick={handleClick}
        />
        {/* <Feedback handleClick={handleClick} options={Object.keys(Usestate)} /> */}
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveFeedbackPercentage={positiveFeedbackPercentage}
          />
        )}
      </Section>
    </>
  );
};
