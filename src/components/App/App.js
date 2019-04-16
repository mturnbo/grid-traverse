import React from 'react';
import Grid from 'components/Grid';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Grid rows={5} cols={5} />
      </div>
    );
  }
}

export default App;
