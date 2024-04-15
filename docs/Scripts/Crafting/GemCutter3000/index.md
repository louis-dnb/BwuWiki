---
title: GemCutter3000
description: The GemCutter3000 cuts gems. Fast.
# Slug is the URL path for this page.
slug: /GemCutter3000
---

import React from 'react';
import TopBanner from '@site/src/components/TopBanner';
import ContentBlock from '@site/src/components/ContentBlock';
import Changelog from '@site/src/components/Changelog';
import BrowserWindow from '@site/src/components/BrowserWindow';
import changes from './changes.json'

<TopBanner title="GemCutter3000" version="v1.1" author="sadness" skill="Crafting">
</TopBanner>

:::hidden

## Cost

:::

<ContentBlock title="Cost">

> - Free and Open Source

</ContentBlock>

:::hidden

## Features

:::

<ContentBlock title="Features">

> - Supports all uncut gems
> - Checks for level requirement
> - Will idle if there are no gems to cut, or you don't have the required level
> - Is open source: https://github.com/notsadness/GemCutter3000

</ContentBlock>

:::hidden

## Requirements

:::
<ContentBlock title="Requirements">

- Have uncut gems saved as your last bank preset
- Start the script near a bank/bank chest

</ContentBlock>

:::hidden

## Changelog

:::

<Changelog changes={changes}>

</Changelog>
