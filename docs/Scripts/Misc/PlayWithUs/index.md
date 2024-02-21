---
title: Example
description: Example.
# Slug is the URL path for this page.
slug: /Example
---

import React from 'react';
import TopBanner from '@site/src/components/TopBanner';
import ContentBlock from '@site/src/components/ContentBlock';
import Changelog from '@site/src/components/Changelog';
import BrowserWindow from '@site/src/components/BrowserWindow';
import changes from './changes.json'

<TopBanner title="Example" version="v1.0.6" skill="Necromancy">
</TopBanner>

:::hidden

## Cost

:::

<ContentBlock title="Cost">

> - $ USD / month (not including client access)


</ContentBlock>

:::hidden

## Features

:::

<ContentBlock title="Features">

> - example

</ContentBlock>

:::hidden

## Requirements

:::
<ContentBlock title="Requirements">

- example

</ContentBlock>

:::hidden

## Setup

:::
<ContentBlock title="Setup">

<details>
<summary>example</summary>

- example

</details>


<details>
<summary>UI Settings Guide</summary>

- example

</details>

</ContentBlock>

:::hidden

## Changelog

:::

<Changelog changes={changes}>

</Changelog>
