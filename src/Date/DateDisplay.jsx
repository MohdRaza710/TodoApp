import React from 'react';
import dayjs from 'dayjs';

const DateDisplay = () => {
  return <div>{dayjs().format('YYYY-MM-DD')}</div>;
};

export default DateDisplay;