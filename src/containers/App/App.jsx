import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Grid from 'containers/Grid';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Header title="Grid Traversal Demo" />
        <Grid rows={5} cols={5} />
        <Footer title="Footer" />
      </div>
    );
  }
}

export default App;
