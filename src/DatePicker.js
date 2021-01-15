import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './datePicker.css';

import { DateRangePicker } from 'react-date-range';

export function DatePicker({ block, ...props }) {
  const [ranges, setRanges] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  return (
    <DateRangePicker
      ranges={ranges}
      onChange={(item) => setRanges([item.selection])}
      moveRangeOnFirstSelection={false}
      dateDisplayFormat="P"
      months={2}
      direction="horizontal"
      rangeColors={['#dceef9']}
      className="leap-4d-date-picker"
    />
  );
}

DatePicker.propTypes = {
  block: PropTypes.bool,
};

DatePicker.defaultProps = {
  block: false,
};
