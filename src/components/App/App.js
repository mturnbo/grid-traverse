import React from 'react';
import Grid from 'components/Grid';
import Combinations from 'components/Combinations';
import { StateProvider } from '../../state';

const App = () => {
  const initialState = {
    selectedTiles: []
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'updateSelectedTiles':
        if (state.selectedTiles.filter(t => t.row === action.tile.row && t.col === action.tile.col).length) {
          return {
            ...state,
            selectedTiles: state.selectedTiles.filter(t => t.row !== action.tile.row && t.col !== action.tile.col)
          };
        }
        if (state.selectedTiles.length < 2) {
          return {
            ...state,
            selectedTiles: state.selectedTiles.concat(action.tile)
          };
        }
        return state;
      case 'clearSelectedTiles':
        return {
          ...initialState
        };
      default:
        return state;
    }
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className="uk-container">
        <h1 className="uk-heading-small uk-heading-divider">Grid Traversal Combinations</h1>
        <div data-uk-grid="true">
          <div className="uk-width-expand@m">
            <Grid rows={5} cols={5} />
          </div>
          <div className="uk-width-auto@m uk-align-center">
            <Combinations />
          </div>
        </div>
      </div>
    </StateProvider>
  );
};

export default App;
