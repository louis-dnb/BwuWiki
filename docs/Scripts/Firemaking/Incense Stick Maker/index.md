---
title: Incense Stick Maker
description: The Incense Stick maker supports all incense sticks types, creating these from their base logs through to adding the required herb.
# Slug is the URL path for this page.
slug: /Incense-Stick-Maker
---

import React from 'react';
import TopBanner from '@site/src/components/TopBanner';
import ContentBlock from '@site/src/components/ContentBlock';
import Changelog from '@site/src/components/Changelog';
import BrowserWindow from '@site/src/components/BrowserWindow';
import changes from './changes.json'

<TopBanner title="Incense Stick Maker" version="v1.0.6" author="Sadness" skill="Firemaking">
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

> - The Incense Stick maker supports all incense sticks types, creating these from their base logs through to adding the required herb.
> - The script is currently developed to operate independently in three phases:
> - 1. Craft Incense Sticks: Crafting of the logs
> - 2. Ash Incense Sticks: Adding ash to the crafted incense sticks
> - 3. Herb Incense Sticks: Adding the herb to the ashed incense sticks, completing the process

![Example](01IncenseStickMaker.png)

</ContentBlock>

:::hidden

## Requirements

:::
<ContentBlock title="Requirements">

To start:

1.  Setup 3 bank presets:
    - Logs to be crafted into the base incense stick
    - 13 incense sticks and 26 ashes (2:1 ratio)
    - 27 incense sticks and 27 of the corresponding herb
2.  Select one of the three script options and it's corresponding preset
3.              Click start script

</ContentBlock>

:::hidden

## Changelog

:::

<Changelog changes={changes}>

</Changelog>
