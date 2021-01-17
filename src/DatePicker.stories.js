import React from 'react';
// import styled, { css } from 'styled-components';

import { DatePicker } from './DatePicker';

export default {
  title: 'Design System/DatePicker',
  component: DatePicker,
};

export const DateRange = (args) => (
  <>
    <DatePicker {...args} />
  </>
);

DateRange.args = {
  isDateRange: true,
};
