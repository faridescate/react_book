import React from 'react';
import { render } from 'react-dom';
import Books from '../imports/ui/components/Books';

render(
  <Books firstName="Farid" />,
  document.getElementById('react-root')
);
