import { Component } from "react";
import { Button } from "../Button/Button";

export class Feedback extends Component {
    
  addFeedback = ({ target: { name } }) => {
    this.setState({ [name]:this.state[name] + 1 })
  }

  countTotalFeedback = () => { return ((this.state.good + this.state.neutral + this.state.bad))}
  
  countPositiveFeedbackPercentage = () => {
    const total = (this.state.good + this.state.neutral + this.state.bad);  
    return (((total) === 0) ?
      0 : 
      Math.round(100 * this.state.good / (total)))
  }
  render() { 
    return (
      <>
        <p>Please leave Feedback</p>
        <Button clickHandler={this.addFeedback} text='Good' name="good" />
        <Button clickHandler={this.addFeedback} text='Neutral' name="neutral"/>
        <Button clickHandler={this.addFeedback} text='Bad' name="bad" />
        <p>Statistic</p>
        <p>Good : { this.state.good}</p>
        <p>Neutral : { this.state.neutral}</p>
        <p>Bad : {this.state.bad}</p>
        <p>Total : {this.countTotalFeedback()}</p>
        <p>Positive feedbacks : {this.countPositiveFeedbackPercentage()}% </p>
      </>
    );
  }
}

