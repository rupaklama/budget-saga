import React, { Fragment } from 'react';
import { Checkbox, Form, Segment } from 'semantic-ui-react';

const EntryForm = ({
  description,
  value,
  isExpense,
  setDescription,
  setValue,
  setIsExpense,
}) => {
  return (
    <Fragment>
      <Form.Group>
        <Form.Input
          placeholder='New shinny thing'
          icon='tags'
          width={12}
          label='Description'
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <Form.Input
          placeholder='100.00'
          icon='dollar'
          iconPosition='left'
          width={4}
          label='Value'
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </Form.Group>

      <Segment compact>
        <Checkbox
          toggle
          label='Is expense?'
          checked={isExpense}
          // updater pattern - whenever updating state with setState func which relies on previous state
          // it's best to use what's knowns as UPDATER PATTERN
          // Setter func give us access to PREVIOUS value of state
          onChange={() => setIsExpense(prevState => !prevState)} // true to false
        />
      </Segment>
    </Fragment>
  );
};

export default EntryForm;
