import './AppLink.css';

export const AppLink = (props /* { href, external } */) => {
  return (
    <a
      data-testid="AppLink"
      className="App-link"
      href={props.href}
      {...(props.external
        ? {
            target: '_blank',
            rel: 'noopener noreferrer',
          }
        : null)}
    >
      {props.children}
    </a>
  );
};
