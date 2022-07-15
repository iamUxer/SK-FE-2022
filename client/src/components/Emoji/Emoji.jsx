import './Emoji.css';
import { Component } from 'react';
import { getPublicAsset } from 'utils';

export class Emoji extends Component {
  render() {
    const { image, label } = this.props;
    return (
      <figure className="emoji">
        <img src={getPublicAsset(image)} alt={label} title={label} />
      </figure>
    );
  }

  subscribeEvent() {
    const clearKey = window.setInterval(
      () => console.log('subscription'),
      1000
    );
    return () => clearInterval(clearKey);
  }

  componentDidMount() {
    console.log('Emoji 마운트');
    this.unsubscribeEvent = this.subscribeEvent();
  }

  componentWillUnmount() {
    console.log('Emoji 언마운트');
    this.unsubscribeEvent();
  }
}
