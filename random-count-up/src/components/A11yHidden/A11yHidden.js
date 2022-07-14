import React from 'react';
import styles from './A11yHidden.module.css';
import classNames from 'classnames';

// Presentational Component
// Stateless Component
// Functional Component

export function A11yHidden({
  as: ComponentName,
  focusable,
  className: customClassName,
  style: customStyle,
  children,
  ...restProps
}) {
  return (
    <ComponentName
      className={classNames(
        styles.readableHidden,
        { [styles.focusable]: focusable },
        customClassName
      )}
      style={customStyle}
      {...restProps}
    >
      {children}
    </ComponentName>
  );
}

A11yHidden.defaultProps = {
  as: 'span',
  focusable: false,
  className: '',
};
