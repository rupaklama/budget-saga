import React from 'react';
import { Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import EntryForm from './EntryForm';

const NewEntryForm = ({
  addEntry,
  description,
  value,
  isExpense,
  setIsExpense,
  setDescription,
  setValue,
}) => {
  return (
    <Form unstackable>
      <EntryForm
        description={description}
        value={value}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
        setDescription={setDescription}
        setValue={setValue}
      />

      <ButtonSaveOrCancel
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setValue={setValue}
        setDescription={setDescription}
      />
    </Form>
  );
};

export default NewEntryForm;
