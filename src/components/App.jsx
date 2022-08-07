import {useState } from 'react';
import Container from './Container';
import Section from './Section';
import Notification from './Notification';
import Feedback from './Feedback';
import Statistics from './Statistics';

const App =()=>{
  const [good, setGood] = useState(0);
  const [neutral, setNeutral]= useState(0);
  const [bad, setBad]=useState(0);
  const title = 'Please leave feedback';

  const handleIncrement = (option) => {
    switch (option) {
      case 'Good':
        setGood(state => state + 1);
        break;

      case 'Neutral':
        setNeutral(state => state + 1);
        break;

      case 'Bad':
        setBad(state => state + 1);
        break;

      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    if(countTotalFeedback()){
    return Math.round((good / (good + neutral + bad)) * 100)};
  return 0;
  };

  
    
    
    
    return (
      <Container>
        <Section title={title}>
          <Feedback
            options={['Good','Bad','Neutral']}
            onHandleIncrement={handleIncrement}
          />
          {countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              countTotalFeedback={countTotalFeedback}
              positiveFeedbackPercentage={countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    )
  
}
export default App;
