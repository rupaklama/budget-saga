import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import EntryForm from './EntryForm';

const ModalEdit = ({
  isOpen,
  setIsOpen,
  description,
  value,
  isExpense,
  setIsExpense,
  setDescription,
  setValue,
}) => {
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit entry</Modal.Header>
      <Modal.Content>
        <EntryForm
          description={description}
          value={value}
          isExpense={isExpense}
          setIsExpense={setIsExpense}
          setDescription={setDescription}
          setValue={setValue}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' onClick={() => setIsOpen(false)}>
          Close
        </Button>
        <Button color='green' onClick={() => setIsOpen(false)}>
          Save
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalEdit;
