import React from 'react';
import PropTypes from 'prop-types';
import MathJax from 'react-mathjax';

const combo = (start, end) => {
  const factorial = n => (n === 0 ? 1 : n * factorial(n - 1));
  const numElements = end[0] - start[0] + end[1] - start[1];
  const numDirections = 2;
  return factorial(numElements) / (factorial(numDirections) * factorial(numElements - numDirections))
};

const Formula = ({ n, k, s }) => {
  const formula = 'C_k(n) = {n! \\over k!(n - k)!}';
  const answer = combo([1,1],[5,3]);
  const solution = `C_${k}(${n}) = {${n}! \\over ${k}!(${n} - ${k})!} = ${answer}`;

  return (
    <MathJax.Provider>
      <div>
        <MathJax.Node formula={formula} />
        <MathJax.Node formula={solution} />
      </div>
    </MathJax.Provider>
  );
};

Formula.propTypes = {
  n: PropTypes.number.isRequired,
  k: PropTypes.number.isRequired,
  s: PropTypes.number.isRequired
};

export default Formula;
