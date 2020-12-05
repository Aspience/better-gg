import React from 'jsx-dom';

interface IComponent {
  render: () => JSX.Element;
}

class GComponent implements IComponent {
  render() {
    return <React.Fragment />;
  }
}

export { GComponent };
