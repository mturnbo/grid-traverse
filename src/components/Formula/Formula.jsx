import React from 'react';
import PropTypes from 'prop-types';
import MathJax from 'react-mathjax';

const Formula = (props) => {
  const formula = 'C_k(n) = {n! \\over k!(n - k)!}';
  const solution = `C_${props.k}(${props.n}) = {${props.n}! \\over ${props.k}!(${props.n} - ${props.k})!} = ${props.s}`;

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
