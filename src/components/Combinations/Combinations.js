import React from 'react';
import MathJax from 'react-mathjax';
import { useStateValue } from '../../state';

const factorial = n => (n === 0 ? 1 : n * factorial(n - 1));

const tileStr = t => `[${t.row}, ${t.col}]`;

const Combinations = () => {
  const [{ selectedTiles }] = useStateValue();

  if (selectedTiles.length > 1) {
    const numRows = Math.abs(selectedTiles[1].row - selectedTiles[0].row);
    const numCols = Math.abs(selectedTiles[1].col - selectedTiles[0].col);
    const numCombos = factorial(numRows + numCols) / factorial(numCols) / factorial(numRows);
    const formula = 'C(r, c) = {(r + c)! / c! \\over r!}';
    const solution = `C(${numRows}, ${numCols}) = {(${numRows} + ${numCols})! / ${numCols}! \\over ${numRows}!}`;
    const path = `${tileStr(selectedTiles[0])} to ${tileStr(selectedTiles[1])}`;

    return (
      <MathJax.Provider>
        <div>
          <MathJax.Node formula={formula}/>
          <MathJax.Node formula={solution}/>
          <h2>{numCombos} ways to traverse {path}</h2>
        </div>
      </MathJax.Provider>
    );
  }

  return (
    <div>Select 2 Tiles</div>
  );
};

export default Combinations;
