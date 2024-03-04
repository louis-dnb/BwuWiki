import React from 'react';
import VarTable from '@site/src/components/VariableTable';
import ContentBlock from '@site/src/components/ContentBlock';
import names from './vars_named.json'

:::hidden

## Varbit and Varp Data

:::

<ContentBlock title="Varbit and Varp Data">

:::info
Ensure the accuracy of the information when incorporating new data to the list.

- Varbit, short for Variable Bit, is a game mechanic that represents a binary variable with two possible states: on or off, true or false.
- Varp, short for Variable Player, refers to a game variable that stores specific data related to a player's account. Varps are used to keep track of various player-related information, such as settings, preferences, or progress in certain activities.

input format:

```
 {
    "id": 1,
    "varId": 1,
    "type": "VARBIT or VARP or INVVARBIT",
    "description": "what does it do?"
  },
```

:::

</ContentBlock>
:::hidden

## Data Table

:::
<VarTable variables={names}>

</VarTable>
