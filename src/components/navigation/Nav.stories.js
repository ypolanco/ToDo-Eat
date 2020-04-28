import React from 'react';
import { Button } from '@storybook/react/demo';
import { storiesOf } from '@storybook/react';
// import Nav from "./Nav"


storiesOf("Links", module)
  .add('Chicken Link', () =><Button className="chicken" label="chick" type="chick">
    <span role="img" aria-label="so cool">
    🐔
    </span>
  </Button>
)
.add('Beef Link', () => <Button>
    <span role="img" aria-label="so cool" className="beef">
    🐄
    </span>
  </Button>
)
.add('Pork Link', () => <Button>
<span role="img" aria-label="so cool" className="pork">
🐷
</span>
</Button>
)
.add('Fish Link', () => <Button>
    <span role="img" aria-label="so cool" className="fish">
      🐟
    </span>
  </Button>
)
.add('Vegiterian Link', () => <Button>
    <span role="img" aria-label="so cool" className="veg">
      🥬
    </span>
  </Button>
)

