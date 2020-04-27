import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react';
import Bar from "./Bar"
import heart from "./heart.svg"



storiesOf('Bar', module)
  .add('Primary', () => <Bar label="Like" type="primary"/>)

storiesOf('Bar Input', module)
  .add('Primary Input', () => <Bar Type = "text" placeholder="Email" label="Email" type="input"/>)

  
 