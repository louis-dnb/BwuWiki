---
title: CookWithUs
description: Example.
# Slug is the URL path for this page.
slug: /CookWithUs
---

import React from 'react';
import TopBanner from '@site/src/components/TopBanner';
import ContentBlock from '@site/src/components/ContentBlock';
import Changelog from '@site/src/components/Changelog';
import BrowserWindow from '@site/src/components/BrowserWindow';
import changes from './changes.json'

<TopBanner title="CookWithUs" version="v1.0.6" author="BotWithUs" offical="OFFICAL SCRIPT" skill="Cooking">
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

> - Cooks a preset of raw food until completion.
> - Persistence of UI settings

![Example](01CookWithUs.png)

</ContentBlock>

:::hidden

## Requirements

:::
<ContentBlock title="Requirements">

- Use near a portable range, prif/max guild bonfire, or regular range with a bank/banker nearby.

</ContentBlock>

:::hidden

## Changelog

:::

<Changelog changes={changes}>

</Changelog>
