import React, { useState } from "react"; 
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { NotificationMessage } from "./Notification/NotificationMessage";
import { MainContainer } from "./MainContainer/MainContainer.styled";

export const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

const options = ['good', 'neutral', 'bad'];

const onLeaveFeedback = (option) => {  
    if (option === "good") {
        setGood(good + 1);
    } else if (option === "neutral") {
        setNeutral(neutral + 1);
    } else if (option === "bad") {
        setBad(bad + 1);
    }
};
const total = good + neutral + bad; 
const countPositiveFeedbackPercentage = () => {   
    const positivePercentage = Math.round((good/total) * 100 );
    return good ? positivePercentage : 0;      
};
 
  return (
    <MainContainer>
      <Section title ="Please leave feedback!">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title ="Statistics">
          {total ? (
          <Statistics 
          good={good} 
          neutral={neutral} 
          bad={bad} 
          total={total} 
          positivePercentage={countPositiveFeedbackPercentage()}/>)
        : <NotificationMessage message = "There is no feedback"/> }  
      </Section>        
    </MainContainer>
  );
};