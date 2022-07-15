import styles from './style.module.css';
import { useState } from 'react';

// 2019 React Hooks
// state hook (use*)

const LearnHooksPage = () => {
  const [state, setState] = useState({
    subject: 'React',
  });

  const handleToggleSubject = () => {
    let subject = state.subject.includes('React') ? 'Vue' : 'React';
    setState({ subject });

    console.log('업데이트 된 함수 컴포넌트의 상태 = ', state.subject);
  };

  return (
    <div id="learnClass" className={styles.container} lang="en">
      <h1>{state.subject}</h1>
      <button type="button" onClick={handleToggleSubject}>
        Toggle Subject
      </button>
    </div>
  );
};

export default LearnHooksPage;
