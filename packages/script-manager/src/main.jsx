import '@babel/polyfill';
import PropTypes from 'prop-types';
import React from 'react';
import ScriptManager from './ScriptManager';

const propTypes = {
  initProps: PropTypes.shape({
    sender: PropTypes.string,
  }),
  onSubmit: PropTypes.func,
};

const defaultProps = {
  initProps: {
    sender: 'unknown',
  },
  onSubmit: () => {},
};

export default function Wrapper({ initProps, onSubmit }) {
  return (
    <div className="script-manager-wrapper">
      <ScriptManager initProps={initProps} onSubmit={onSubmit} />
    </div>
  );
}

Wrapper.propTypes = propTypes;
Wrapper.defaultProps = defaultProps;
