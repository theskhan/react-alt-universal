import React from 'react';
import AltContainer from 'alt-container';

import 'scss/main';

if (typeof window !== 'undefined') {
  require('bootstrap/dist/css/bootstrap.min.css');
}

export default class App extends React.Component {
  render() {
    return (
      <AltContainer>
        {this.props.children}
      </AltContainer>
    );
  }
}

App.propTypes = { children: React.PropTypes.object };
