import React from 'react';
import PropTypes from 'prop-types';
import MathJax from 'react-mathjax';

const factorial = n => (n === 0 ? 1 : n * factorial(n - 1));

const tileStr = t => `[${t.row}, ${t.col}]`;

const Combinations = ({ tiles }) => {
  const numRows = Math.abs(tiles[1].row - tiles[0].row);
  const numCols = Math.abs(tiles[1].col - tiles[0].col);
  const numCombos = factorial(numRows + numCols) / factorial(numCols) / factorial(numRows);
  const formula = 'C(r, c) = {(r + c)! / c! \\over r!}';
  const solution = `C(${numRows}, ${numCols}) = {(${numRows} + ${numCols})! / ${numCols}! \\over ${numRows}!}`;
  const path = `${tileStr(tiles[0])} to ${tileStr(tiles[1])}`;

  return (
    <MathJax.Provider>
      <div>
        <MathJax.Node formula={formula} />
        <MathJax.Node formula={solution} />
        <h2>{numCombos} ways to traverse {path}</h2>
      </div>
    </MathJax.Provider>
  );
};

Combinations.propTypes = {
  tiles: PropTypes.arrayOf(
    PropTypes.shape({
      row: PropTypes.number.isRequired,
      col: PropTypes.number.isRequired
    }).isRequired
  )
};

export default Combinations;
