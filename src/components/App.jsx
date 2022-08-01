import React, { Component } from 'react';
import Container from './Container';
import Section from './Section';
import Notification from './Notification';
import Feedback from './Feedback';
import Statistics from './Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = options => {
    this.setState({
      [options]: this.state[options] + 1,
    });
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round((good / (good + neutral + bad)) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const title = 'Please leave feedback';
    return (
      <Container>
        <Section title={title}>
          <Feedback
            options={options}
            onHandleIncrement={this.handleIncrement}
          />
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              countTotalFeedback={this.countTotalFeedback}
              positiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}
export default App;
