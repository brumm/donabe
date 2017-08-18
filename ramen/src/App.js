import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    const { children } = this.props
    return (
      <div>
        <h1>Ramen</h1>
        <ul>
          <li><Link to='/shoyu'>Shoyu</Link></li>
          <li><Link to='/miso'>Miso</Link></li>
          <li><Link to='/shio'>Shio</Link></li>
        </ul>
        <hr />
        {children}
      </div>
    );
  }
}

export default App;
