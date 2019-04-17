import React from 'react';
import Grid from 'components/Grid';
import './App.scss';
import Combinations from 'components/Combinations';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTiles: []
    };
    this.updateSelectedTiles = this.updateSelectedTiles.bind(this);
  }

  updateSelectedTiles(tiles) {
    this.setState({ selectedTiles: tiles });
  }

  render() {
    return (
      <div className="app-container">
        <Grid rows={5} cols={5} onSelectedTileUpdate={this.updateSelectedTiles}/>
        {this.state.selectedTiles.length > 1 && <Combinations tiles={this.state.selectedTiles} />}
      </div>
    );
  }
}

export default App;
