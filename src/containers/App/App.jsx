import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Grid from 'containers/Grid';
import Formula from 'components/Formula';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Header title="Grid Traversal Demo" />
        <Formula n={14} k={2} s={91}/>
        <Grid rows={5} cols={5} />
        <Footer title="Footer" />
      </div>
    );
  }
}

export default App;
