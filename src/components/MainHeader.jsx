import React from 'react';
import { Header } from 'semantic-ui-react';

// type - default header to be h1
function MainHeader({ title, type = 'h1' }) {
  return <Header as={type}>{title}</Header>;
}

export default MainHeader;
