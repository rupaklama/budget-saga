import { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import DisplayAllBalance from './components/DisplayAllBalance';
import DisplayBalance from './components/DisplayBalance';

import EntryLines from './components/EntryLines';

import MainHeader from './components/MainHeader';
import ModalEdit from './components/ModalEdit';

import NewEntryForm from './components/NewEntryForm';

const initialEntries = [
  {
    id: 1,
    description: 'Work income',
    value: '$1000,00',
    isExpense: false,
  },
  {
    id: 2,
    description: 'Water bill',
    value: '$20',
    isExpense: true,
  },
  {
    id: 3,
    description: 'Rent',
    value: '$300',
    isExpense: true,
  },
  {
    id: 4,
    description: 'Power bill',
    value: '$50',
    isExpense: true,
  },
];

function App() {
  const [entries, setEntries] = useState(initialEntries);
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState(null);

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex(entry => entry.id === entryId);
      const newEntries = [...entries]; // copying object

      // update object values
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const deleteEntry = id => {
    const result = entries.filter(entry => entry.id !== id);

    setEntries(result);
  };

  const addEntry = (description, value, isExpense) => {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense,
    });

    setEntries(result);
  };

  const editEntry = id => {
    if (id) {
      // find index
      const index = entries.findIndex(entry => entry.id === id);

      // apply that index to get particular object
      const entry = entries[index];

      // applying object values
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
      setEntryId(id);
    }
  };

  return (
    <Container>
      <MainHeader title='Budget Saga' />

      <DisplayBalance title='Your Balance:' value='2,550.53' size='small' />

      <DisplayAllBalance />

      <MainHeader title='History' type='h3' />

      <EntryLines
        entries={entries}
        deleteEntry={deleteEntry}
        setIsOpen={setIsOpen}
        editEntry={editEntry}
      />

      <MainHeader title='Add new transaction' type='h3' />

      <NewEntryForm
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
        setDescription={setDescription}
        setValue={setValue}
      />
      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
        setDescription={setDescription}
        setValue={setValue}
      />
    </Container>
  );
}

export default App;
