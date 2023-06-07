// import './App.css';
import React, { useState, useEffect } from 'react';

import { Section } from './components/Section/Section';
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions';
import { Statistics } from './components/Statistics/Statistics';

// const useOpyions = (defaultValue) => {
//   const [state, setState] = useState(0);
// }

export const App = () => {
  const [good, setGood] = useState(0);
  console.log(good);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];
  console.log(options);
  const total = good + neutral + bad;
  console.log(total);
  const positivePercentage = ((good / total) * 100).toFixed(0);
  console.log(positivePercentage, '%');
  
  const onLeaveFeedback = (e) => {
    const option = e.target.name;
    console.log(option);
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
    
      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  }
  
  useEffect(() => {
    // const total = good + neutral + bad;
    console.log("total:", total);
    // const positivePercentage = ((good / total) * 100).toFixed(0);
    console.log("positivePercentage:", positivePercentage);
  }, [good, neutral, bad]);

  // onLeaveFeedback = (event) => {    
  //   // console.log(event.target.name);
  //   const option = event.target.name;
  //   console.log(option);
  //   this.setState((prevState) => ({
  //   [option]: (prevState[option] += 1),        
  //   }));
  // };
  
  // render() {
    // const { good, neutral, bad } = this.state;
    // const options = Object.keys(this.state);
    // console.log(options);
    // const total = good + neutral + bad;
    // console.log(total);
    // const positivePercentage = ((good / total) * 100).toFixed(0);
    // console.log(positivePercentage);    

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