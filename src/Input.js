import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { color, spacing, typography } from './shared/styles';

const InputElement = styled.input`
  border: 1px solid ${color.background.primaryDark};
  color: ${color.text.default};
  &:focus {
    border: 1px solid ${color.border.focus};
  }
  line-height: 1;
  padding: ${spacing.insetFormControl.regular.y}px
    ${spacing.insetFormControl.regular.x}px;
  ${(props) =>
    props.size === 'compact' &&
    css`
      padding: ${spacing.insetFormControl.compact.y}px
        ${spacing.insetFormControl.compact.x}px;
    `}
`;

export function Input({ size, ...props }) {
  return <InputElement size={size} {...props} />;
}

Input.propTypes = {
  size: PropTypes.string,
};

Input.defaultProps = {
  size: 'regular',
};
