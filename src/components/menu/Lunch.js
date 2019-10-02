import React from 'react';
import Button from '@material-ui/core/Button';

export const BtnOptions = (props) => {
  return (
    <div>
      <Button>{props.name}</Button>
    </div>
  )
}