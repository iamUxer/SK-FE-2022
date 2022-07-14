import { ReactComponent as ReactLogo } from 'assets/logo.svg';
import { AppLink } from 'components';
import { Link } from 'react-router-dom';

export default function HomePage({ linkText }) {
  return (
    <figure style={{ marginTop: 120 }}>
      <ReactLogo className="App-logo" title="React" />
    </figure>
  );
}
