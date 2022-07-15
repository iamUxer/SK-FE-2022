import styles from './style.module.css';
import { Component } from 'react';
import { Emoji } from 'components';

class LearnClassPage extends Component {
  /* RENDER ------------------------------------------------------------------- */

  // constructor
  state = {
    subject: 'React',
    isLoading: true,
    randomUser: null,
    hasError: false,
  };

  // props로부터 파생된 state를 설정하는 라이프 사이클 메서드
  // static getDerivedStateFromProps
  static getDerivedStateFromProps(props, state) {
    if (state.subject.includes('React')) {
      return {
        additionalSbject: 'Redux',
      };
    } else {
      return {
        additionalSbject: 'Piniya',
      };
    }
  }

  // 컴포넌트를 업데이트 할지 여부
  // shouldComponentUpdate
  // 불필요한 리-렌더링
  shouldComponentUpdate(nextProps, nextState) {
    // return nextProps?.list === this.props?.list ? false : true;
    return nextState.subject === this.props.subject ? false : true;
  }

  // render
  render() {
    const { isLoading, hasError, subject, additionalSbject, randomUser } =
      this.state;

    if (isLoading) {
      return <div role={'alert'}>로딩 중입니다.......</div>;
    }

    if (hasError) {
      return <div role={'alert'}>오류 발생!</div>;
    }

    const isRenderingEmoji = subject.includes('Vue');

    return (
      <div id="learnClass" className={styles.container} lang="en">
        <button
          type="button"
          className={styles.button}
          onClick={this.handleToggleSubject}
        >
          Toggle Subject
        </button>

        <h1>
          {subject} / {additionalSbject}
        </h1>

        {isRenderingEmoji && (
          <Emoji image="react-atom.png" label="React Favorite Icon" />
        )}

        {randomUser && (
          <img
            className="userProfile"
            src={randomUser.picture.thumbnail}
            style={{ display: 'block' }}
            alt=""
          />
        )}
      </div>
    );
  }

  /* PRE-COMMIT --------------------------------------------------------------- */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // 문제가 발생한 UI의 원인 분석 후, 처리 값을 반환
    return null; // snapshot
  }

  /* COMMIT ------------------------------------------------------------------- */

  componentDidMount() {
    this.stylingContainer();
    // this.fetchRandomUser();
    this.fetchRandomUserAsync();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.toggleUserProfile();
    if (snapshot) {
      // 문제가 발생한 UI를 해결하는 코드 로직 작성
    }
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

  // Promise
  // request
  // response
  // - fulfilled
  // - rejected
  fetchRandomUser() {
    fetch('https://randomuser.me/api')
      .then((response) => response.json())
      .then(({ results }) => {
        const [randomUser] = results;
        this.setState({ randomUser });
      })
      .catch((error) => this.setState({ hasError: !!error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  // async 함수
  async fetchRandomUserAsync() {
    // 비동기 요청 응답 (처리: 성공/실패)

    try {
      const { results } = await (
        await fetch('https://randomuser.me/api')
      ).json();
      const [randomUser] = results;
      this.setState({ randomUser });
    } catch (error) {
      this.setState({ hasError: !!error });
    } finally {
      this.setState({ isLoading: false });
    }
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
