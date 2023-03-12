import { Component } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }; 

  leaveFeedback = ({ target: { name } }) => {
      this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () => { return ((this.state.good + this.state.neutral + this.state.bad)) };
  
  countPositiveFeedbackPercentage = () => {
    const total = (this.state.good + this.state.neutral + this.state.bad);
    return (((total) === 0) ?
      0 :
      Math.round(100 * this.state.good / (total)))
  };

  render() {  
    return(
    <>
      <FeedbackOptions 
        options={Object.keys(this.state)}
        onLeaveFeedback={this.leaveFeedback}
      />
      <Statistics
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
        total={this.countTotalFeedback()}
        positivePercentage={this.countPositiveFeedbackPercentage()}
      />
    </>)
  };
};
