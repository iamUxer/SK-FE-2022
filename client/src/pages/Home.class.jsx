import axios from 'axios';
import { Component } from 'react';

export default class HomePage extends Component {
  state = {
    loading: true,
    error: null,
    data: null,
  };

  render() {
    const { loading, error, data } = this.state;

    if (loading) {
      return <div role="alert">로딩 중...</div>;
    }

    if (error) {
      return <div role="alert">오류 발생</div>;
    }

    console.table(data);

    return (
      <div className="container">
        <h1 style={{ fontSize: 24, textAlign: 'center' }}>
          SK GATEWAY 실습을 진행합니다.
        </h1>
      </div>
    );
  }

  async fetchData(endpoints) {
    try {
      const {
        data: { gateway },
      } = await axios.get(endpoints);
      this.setState({ data: gateway });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  }

  componentDidMount() {
    this.fetchData('/api/');
  }
}
