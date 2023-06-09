// import './App.css';
import React, { useState } from 'react';

import { Section } from './components/Section/Section';
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions';
import { Statistics } from './components/Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);  
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = Object.keys({good, neutral, bad});
  // console.log(options);
  const total = good + neutral + bad;
  // console.log(total);
  const positivePercentage = ((good / total) * 100).toFixed(0);
  // console.log(positivePercentage, '%');
  
  // useEffect(() => {
  //   const total = good + neutral + bad;
  //   console.log("total:", total);
  //   const positivePercentage = ((good / total) * 100).toFixed(0);
  //   console.log("positivePercentage:", positivePercentage);
  // }, [good, neutral, bad]);
 
  const onLeaveFeedback = (e) => {
    const option = e.target.name;
    console.log(option);
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
  }
  
  return (
    <>    
    <Section title={"Please leave feedback"} />   
      <FeedbackOptions
      options = {options}
      onLeaveFeedback = {onLeaveFeedback} />    
    <Section title={"Statistics"} />
      <Statistics  good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
    </>      
  );
}