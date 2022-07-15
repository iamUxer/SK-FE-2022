import styles from './style.module.css';
import { Component } from 'react';
import { Emoji } from 'components';

class LearnClassPage extends Component {
  /* RENDER ------------------------------------------------------------------- */

  // constructor
  state = {
    subject: 'React',
    isLoading: false,
    randomUser: null,
    hasError: false,
  };

  // render
  render() {
    const { isLoading, hasError, subject, randomUser } = this.state;

    if (isLoading) {
      return <div role={'alert'}>로딩 중입니다.......</div>;
    }

    if (hasError) {
      return <div role={'alert'}>오류 발생!</div>;
    }

    const isRenderingEmoji = subject.includes('React');

    return (
      <div id="learnClass" className={styles.container} lang="en">
        <button
          type="button"
          className={styles.button}
          onClick={this.handleToggleSubject}
        >
          Toggle Subject
        </button>
        <h1>{subject}</h1>

        {isRenderingEmoji && (
          <Emoji image="react-atom.png" label="React Favorite Icon" />
        )}

        {randomUser && (
          <img
            className="userProfile"
            src={randomUser.picture.thumbnail}
            alt=""
            style={{ display: 'block' }}
          />
        )}
      </div>
    );
  }

  /* COMMIT ------------------------------------------------------------------- */

  componentDidMount() {
    this.stylingContainer();
    this.fetchRandomUser();
  }

  componentDidUpdate() {
    this.toggleUserProfile();
  }

  /* METHODS ------------------------------------------------------------------ */

  toggleUserProfile() {
    const { subject } = this.state;
    document.querySelector('.userProfile').hidden = subject.includes('Vue');
  }

  stylingContainer() {
    const node = document.getElementById('learnClass');
    node && (node.style.backgroundColor = '#1f38b7');
  }

  fetchRandomUser() {
    fetch('https://randomuser.me/api')
      .then((response) => response.json())
      .then(({ results }) => {
        const [randomUser] = results;
        this.setState({ randomUser });
      })
      .catch((error) => console.error(error.message));
  }

  handleToggleSubject = () => {
    const newState = ({ subject }) => ({
      subject: subject.includes('Vue') ? 'React' : 'Vue',
    });

    const callback = () => {
      console.log('callback: updated `subject` state');
    };

    this.setState(newState, callback);
  };
}

export default LearnClassPage;
