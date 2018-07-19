import React from 'react';
import Grid from '../Grid';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <h2>Grid Traversal Demo</h2>
        <hr />
        <Grid rows={5} cols={5} />
      </div>
    );
  }
}

export default App;
