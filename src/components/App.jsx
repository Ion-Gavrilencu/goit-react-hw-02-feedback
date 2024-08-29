import React, { Component } from 'react';
import FeedbackOptions from '../../src/components/FeedbackOptions/FeedbackOptions';
import Statistics from '../../src/components/Statistics/Statistics';
import Section from '../../src/components/Section/Section';
import Notification from '../../src/components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = (type) => {
    this.setState((prevState) => ({
      [type]: prevState[type] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total ? Math.round((this.state.good / total) * 100) : 0;
  };

  render() {
    const total = this.countTotalFeedback();
    const { good, neutral, bad } = this.state;
    
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions 
            options={['good', 'neutral', 'bad']} 
            onLeaveFeedback={this.handleFeedback} 
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;

