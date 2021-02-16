import React from 'react';
import { Container } from 'semantic-ui-react';
import EntryLine from './EntryLine';

const EntryLines = ({ entries, deleteEntry, setIsOpen, editEntry }) => {
  return (
    <Container>
      {entries.map(entry => (
        // ...entry - passing whole entry object as prop
        <EntryLine
          key={entry.id}
          deleteEntry={deleteEntry}
          {...entry}
          setIsOpen={setIsOpen}
          editEntry={editEntry}
        />
      ))}
    </Container>
  );
};

export default EntryLines;
