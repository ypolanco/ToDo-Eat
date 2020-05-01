import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from "./Button"



storiesOf("Button", module)
  .add('Back Up', () =><Button className="back-top" type="button" />
)