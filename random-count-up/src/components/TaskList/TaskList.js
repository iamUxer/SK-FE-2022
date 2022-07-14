import { Component } from 'react';

export class TaskList extends Component {
  constructor(props) {
    super(props);
    // 컴포넌트 자신의 상태
    this.state = {
      title: 'Task List',
    };
  }

  render() {
    return (
      <div className="taskList">
        <h2>{this.state.title}</h2>
        <button
          type="button"
          onClick={() => {
            // mutable
            // this.state.title += '*';

            // immutable
            this.setState({ title: `${this.state.title}*` });

            // update props
            // this.props.title = 'mutation props title';
          }}
        >
          change title
        </button>
      </div>
    );
  }
}
