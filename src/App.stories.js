import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react';
import App from "./App"

storiesOf('Search Input', module)
  .add('Primary Input', () => <App Type="text" placeholder="Food Name" label="Food" type="input" />)
  .add('Button', () => <App label="Search" type="submit"/>)
