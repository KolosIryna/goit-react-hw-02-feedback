import { Component } from 'react';

import { Buttons } from '../Buttons/Buttons';
import { Statistics } from '../Statistics/Statistics';

import css from './FeedbackList.module.css';

export class FeedbackList extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickButton = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  render() {
    const keys = Object.keys(this.state);
    return (
      <section>
        <h1 className={css.title}>Please leave feedback</h1>
        <Buttons keys={keys} onClickButton={this.onClickButton} />
        <h2 className={css.title}>Statistics</h2>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
      </section>
    );
  }
}
