import { useState } from "react"; 
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { NotificationMessage } from "./Notification/NotificationMessage";
import { MainContainer } from "./MainContainer/MainContainer.styled";

export const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)    

const options =['good', 'neutral', 'bad'];

const onLeaveFeedback = (option) => { 
    switch (option) {
      case 'good':
        setGood(prevState => (prevState + 1));
        break;
      case 'neutral':
        setNeutral(prevState => (prevState + 1));
        break;
      case 'bad': 
        setBad(prevState => (prevState + 1));
        break;    
      default: ; 
    }; 
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
          positivePercentage={countPositiveFeedbackPercentage}/>)
        : <NotificationMessage message = "There is no feedback"/> }  
      </Section>        
    </MainContainer>
  );
};