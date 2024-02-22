---
title: Introduction
description: Introduction to BotWithUs.
# Slug is the URL path for this page.
slug: /introduction
---

import React from 'react';
import TopBanner from '@site/src/components/TopBanner';
import ContentBlock from '@site/src/components/ContentBlock';
import Changelog from '@site/src/components/Changelog';
import BrowserWindow from '@site/src/components/BrowserWindow';
import changes from './changes.json'

<TopBanner title="Introduction">
</TopBanner>
:::hidden

## Client Status

:::
<ContentBlock title="Client Status">
<div class="centered-content">
Non-Jagex accounts: ✅ |
Jagex Accounts: ✅ |
Google accounts: ✅ |
Steam: 🔴
</div>
:::warning Jagex accounts
Jagex accounts are currently manually injected due to an update to the Jagex launcher. An elegant solution is in progress.
:::

# Current API Versions:

:::tip The current version of the core API is:

```kotlin
net.botwithus.rs3:botwithus-api:1.0.0-20240213.053515-21
```

:::

:::tip The current version of the extended API is:

```kotlin
net.botwithus.xapi.public:api:1.0.0-20240211.205614-15
```

:::

</ContentBlock>

:::hidden

## Contributors

:::

<ContentBlock title="Active Contributors">
<div class="centered-content">
| Role      | Contributor  | Discord ID  |
| --------- | ------------ | ----------- |
| Staff     | Pookie       | @pookie420  |
| Staff     | DrJavatar    | @drjavatar  |
| Staff     | Cipher       | @ciphers.   |
| Staff     | Sudo         | @sudopro    |
| Staff     | ARMAR X K1NG | @armarxk1ng |
| Staff     | Timmy        | @timmyb     |
| Web Dev   | offline      | @anjato     |
| Moderator | KBD          | @KBD        |
</div>
</ContentBlock>


:::hidden

## Changelog

:::

<Changelog changes={changes}>

</Changelog>
