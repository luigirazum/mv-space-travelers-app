import React from 'react';
import { useSelector } from 'react-redux';
import { selectStatus } from './statusSlice';

function Status() {
  const status = useSelector(selectStatus);

  return (
    <div>
      <p>
        Current status:
        {status}
      </p>
    </div>
  );
}

export default Status;
