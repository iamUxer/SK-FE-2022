import styles from './style.module.css';
import { Component } from 'react';

class LearnClassPage extends Component {
  state = {
    subject: 'React',
  };

  handleToggleSubject() {
    // 1. {}
    // this.setState({
    //   subject: this.state.subject.includes('Vue') ? 'React' : 'Vue',
    // });

    // 2. () => ({})
    // this.setState(({ subject }) => ({
    //   subject: subject.includes('Vue') ? 'React' : 'Vue',
    // }));

    // 3. callback
    const newState = ({ subject }) => ({
      subject: subject.includes('Vue') ? 'React' : 'Vue',
    });

    const callback = () => {
      console.log('callback: updated `subject` state');
    };

    this.setState(newState, callback);

    // React의 상태 업데이트는 동기(sync)이다? yes | no
    // React 상태 업데이트는 비동기(async)이다.
    console.log(`updated subject state = `, this.state.subject);
  }

  render() {
    return (
      <div id="learnClass" className={styles.container} lang="en">
        <h1>{this.state.subject}</h1>
        <button type="button" onClick={this.handleToggleSubject.bind(this)}>
          Toggle Subject
        </button>
      </div>
    );
  }
}

export default LearnClassPage;
