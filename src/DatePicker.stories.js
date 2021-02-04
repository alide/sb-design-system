import React from 'react';
// import styled, { css } from 'styled-components';

import { DatePicker } from './DatePicker';

export default {
  title: 'Design System/DatePicker',
  component: DatePicker,
  decorators: [(Story) => <div style={{ margin: '3em' }}><Story/></div>]
};

export const DateRange = (args) => (
  <>
    <DatePicker {...args} />
  </>
);

DateRange.args = {
  isDateRange: true,
};
