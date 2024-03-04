---
title: AbyssKiller
description: Kill creatures in the Abyss.
# Slug is the URL path for this page.
slug: /AbyssKiller
---

import React from 'react';
import TopBanner from '@site/src/components/TopBanner';
import ContentBlock from '@site/src/components/ContentBlock';
import Changelog from '@site/src/components/Changelog';
import BrowserWindow from '@site/src/components/BrowserWindow';
import changes from './changes.json'

<TopBanner title="AbyssKiller" version="v1.0.0" skill="Attack">
</TopBanner>

:::hidden

## Cost

:::

<ContentBlock title="Cost">

> - FREE / month (not including client access)

</ContentBlock>

:::hidden

## Features

:::

<ContentBlock title="Features">

> - Banking (including recharging Divine charges)
> - Walks to Abyss and checks for a free spot
> - Auto hopping worlds when spots are taken
> - PVP safety check
> - Logout on script error
> - Use any Overload
> - Support any food item
> - Use Soul Split
> - Support for Super restores, Prayer potions and Blessed flask

</ContentBlock>

:::hidden

## Requirements

:::
<ContentBlock title="Requirements">

- Edgeville lodestone unlocked
- War's Retreat unlocked
- Opted out of PVP
- Divine charges in the bank

- Action bar should contain the following:
    - War's Retreat Telport
    - Soul Split

- A preset containing the following:
    - Overload (when Use overload is enabled)
    - Food (when Eat food is enabled)
    - Super restore, Prayer potion or Blessed flask (Depending on prayer restoration choice)

</ContentBlock>

:::hidden

## Setup

:::
<ContentBlock title="Setup">

<details>
<summary>Before starting the script</summary>
- Make a preset containing:
    - Overload (when Use overload is enabled)
    - Food (when Eat food is enabled)
    - Super restore, Prayer potion or Blessed flask (Depending on prayer restoration choice)
- Select the settings you want to use.
- Start the script.

</details>

<details>
<summary>UI Settings Guide</summary>

- Settings
    - Use Overload
    - Preset Number
    - Eat Food
    - Use Soul Split
        - Min Prayer Points
        - Prayer Restore
- Debug
    - Min Script Delay: this will change the minimum delay in the onLoop function.
    - Max Script Delay: this will change the maximum delay in the onLoop function.

</details>

</ContentBlock>

:::hidden

## Changelog

:::

<Changelog changes={changes}>

</Changelog>
