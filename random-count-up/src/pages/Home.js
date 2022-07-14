import { ReactComponent as ReactLogo } from 'assets/logo.svg';
import { AppLink } from 'components';
import { Link } from 'react-router-dom';

export default function HomePage({ linkText }) {
  return [
    <ReactLogo className="App-logo" title="React" />,
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>,
    <AppLink href="https://reactjs.org" external>
      {linkText}
    </AppLink>,
    <p>
      <Link to="/products">Products</Link>
    </p>,
  ];
}
