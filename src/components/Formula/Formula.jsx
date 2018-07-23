import React from 'react';
import PropTypes from 'prop-types';
import MathJax from 'react-mathjax';
import Combo from '../../combos.js';

const Formula = (props) => {
  const formula = 'C_k(n) = {n! \\over k!(n - k)!}';
  const answer = Combo([1,1],[5,3]);
  const solution = `C_${props.k}(${props.n}) = {${props.n}! \\over ${props.k}!(${props.n} - ${props.k})!} = ${answer}`;

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
