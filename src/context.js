import React from 'react';

export const GridContext = React.createContext();

export class GridProvider extends React.Component {
  state = {
    rows: 5,
    cols: 5,
    selectedTiles: [],
    setRows: (n) => this.setState({rows: n}),
    setCols: (n) => this.setState({cols: n})
  };

  render() {
    return (
      <GridContext.Provider value={this.state}>
        {this.props.children}
      </GridContext.Provider>
    );
  }
}
