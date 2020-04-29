import React from 'react';
import { storiesOf } from '@storybook/react';
import symbol from "./symbol.png"
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


storiesOf("Logo", module)
  .add('Logo Link', () =><Nav className="logo" label="logo" src={symbol} />
)

storiesOf("Name", module)
  .add('Logo Link', () =><Nav className="app-name" label="app-name"/>
)