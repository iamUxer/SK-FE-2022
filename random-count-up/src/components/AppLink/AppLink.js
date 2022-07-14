import './AppLink.css';

export const AppLink = (props /* { href, external } */) => {
  // if 문
  if (!props.external) {
    return (
      <a href={props.href} data-testid="AppLink" className="App-link">
        {props.children}
      </a>
    );
  }

  return (
    <a
      href={props.href}
      data-testid="AppLink"
      className="App-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  );
};
