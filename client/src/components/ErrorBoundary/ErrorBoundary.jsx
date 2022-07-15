import React, { Component } from 'react';

export class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error) {
    return {
      hasError: !!error,
      error,
    };
  }

  componentDidCatch(error, errorInfo /* has stack information */) {
    this.setState({
      errorInfo,
    });
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    } else {
      return (
        <div className="ERROR" role="alert">
          {this.state.error.message}
        </div>
      );
    }
  }
}
