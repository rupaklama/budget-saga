import React from 'react';
import { Button } from 'semantic-ui-react';

const ButtonSaveOrCancel = ({
  addEntry,
  description,
  value,
  isExpense,
  setValue,
  setDescription,
}) => {
  const handleClick = e => {
    e.preventDefault();

    addEntry(description, value, isExpense);

    setValue('');
    setDescription('');
  };

  return (
    <Button.Group>
      <Button color='red'>Cancel</Button>
      <Button.Or />
      <Button color='green' onClick={handleClick}>
        Ok
      </Button>
    </Button.Group>
  );
};

export default ButtonSaveOrCancel;
