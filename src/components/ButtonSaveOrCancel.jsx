import React from 'react';
import { Button } from 'semantic-ui-react';

const ButtonSaveOrCancel = () => {
  return (
    <Button.Group>
      <Button color='red'>Cancel</Button>
      <Button.Or />
      <Button color='green'>Ok</Button>
    </Button.Group>
  );
};

export default ButtonSaveOrCancel;
