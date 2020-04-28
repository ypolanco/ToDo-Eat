import React from 'react';
import { storiesOf } from '@storybook/react';
// import MyLink from "./MyLink"
import Nav from "./Nav"


storiesOf("Links", module)
  .add('Chicken Link', () =><Nav className="chicken" label="chick" type="chick" />
)
.add('Beef Link', () => <Nav className="cow" label="cow" type="cow"/>
)
.add('Pork Link', () => <Nav className="pork" label="pork" type="pork"/>
)
.add('Fish Link', () => <Nav className="fish" label="fish" type="fish"/>
)
.add('Veg Link', () => <Nav className="veg" label="veg" type="veg"/>
)
