import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { color, typography } from './shared/styles';

const InputElement = styled.input`
  border: 1px solid ${color.mediumdark};
  &:focus {
    border: 1px solid ${color.primary};
  }
  line-height: 1;
  padding: 4px 8px;
  ${(props) =>
    props.size === 'sm' &&
    css`
      padding: 2px 8px;
    `}
`;

export function Input({ size, ...props }) {
  return <InputElement size={size} {...props} />;
}

Input.propTypes = {
  size: PropTypes.string,
};

Input.defaultProps = {
  size: 'md',
};
