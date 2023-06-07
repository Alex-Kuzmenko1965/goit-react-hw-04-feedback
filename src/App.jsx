// import './App.css';
import React, { Component } from 'react';
import { Section } from './components/Section/Section';
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions';
import { Statistics } from './components/Statistics/Statistics';
export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  onLeaveFeedback = (event) => {    
    // console.log(event.target.name);
    const option = event.target.name;
    console.log(option);
    this.setState((prevState) => ({
    [option]: (prevState[option] += 1),        
    }));
  };
  
  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    console.log(options);
    const total = good + neutral + bad;
    console.log(total);
    const positivePercentage = ((good / total) * 100).toFixed(0);
    console.log(positivePercentage);    

  return (
    <>    
    <Section title={"Please leave feedback"}>   
      <FeedbackOptions
      options = {options}
      onLeaveFeedback = {this.onLeaveFeedback} />
    </Section>
    <Section title={"Statistics"}>
      <Statistics  good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
    </Section>
    </>      
  );}
}