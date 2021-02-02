import { Container } from 'semantic-ui-react';
import DisplayAllBalance from './components/DisplayAllBalance';
import DisplayBalance from './components/DisplayBalance';
import EntryLine from './components/EntryLine';

import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';

function App() {
  return (
    <Container>
      <MainHeader title='Budget Saga' />

      <DisplayBalance title='Your Balance:' value='2,550.53' size='small' />

      <DisplayAllBalance />

      <MainHeader title='History' type='h3' />

      <EntryLine description='income' value='$10.00' />
      <EntryLine description='expense' value='$10.00' isExpense />

      <MainHeader title='Add new transaction' type='h3' />
      <NewEntryForm />
    </Container>
  );
}

export default App;
