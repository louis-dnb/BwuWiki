---
title: BurialsPowderHelper
description: Bury bones and scatter ashes using Powder of burials..
# Slug is the URL path for this page.
slug: /Burials-Powder-Helper
---

import React from 'react';
import TopBanner from '@site/src/components/TopBanner';
import ContentBlock from '@site/src/components/ContentBlock';
import Changelog from '@site/src/components/Changelog';
import BrowserWindow from '@site/src/components/BrowserWindow';
import changes from './changes.json'

<TopBanner title="BurialsPowderHelper" version="v1.0.6" skill="Prayer">
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

> - Bury bones and scatter ashes using Powder of burials.
> - This script only works with Bank chest.

</ContentBlock>

:::hidden

## Requirements

:::
<ContentBlock title="Requirements">

- Stand close to a Bank chest.
- Load the preset you want to use before starting the script.
- A preset containing the following items:
    - Powder of burials
    - Any type of bones
    - Any type of ashes (optional)

</ContentBlock>

:::hidden

## Setup

:::
<ContentBlock title="Setup">

<details>
<summary>Before starting the script</summary>
- Make a preset containing:
    - Powder of burials
    - Any type of bones
    - Any type of ashes (optional)
- Load the the preset you just made.
- Stand close to a Bank chest.
- Start the script.

</details>

<details>
<summary>UI Settings Guide</summary>

- Settings
    - Logout when out of bones: this option will automatically logout your account when out of bones.
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
