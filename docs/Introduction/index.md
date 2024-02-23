---
title: Introduction
description: Introduction to BotWithUs.
# Slug is the URL path for this page.
slug: /introduction
---

import React from 'react';
import TopBanner from '@site/src/components/TopBanner';
import ContentBlock from '@site/src/components/ContentBlock';
import ChangelogIntro from '@site/src/components/ChangelogIntro';
import BrowserWindow from '@site/src/components/BrowserWindow';
import changes from './changes.json'

<TopBanner title="Introduction" skill="hello" showversion={false} showauthor={false}>
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
| Role      | Contributor  | Discord ID  | Discord UID      |
| --------- | ------------ | ----------- |------------------|
| Staff     | Pookie       | @pookie420  |169867031082958849|
| Staff     | DrJavatar    | @drjavatar  |174352432950673409|
| Staff     | Cipher       | @ciphers.   |542130351535816734|
| Staff     | Sudo         | @sudopro    |184095892377174016|
| Staff     | ARMAR X K1NG | @armarxk1ng |206909863928791041|
| Staff     | Timmy        | @timmyb     |83203731226628096 |
| Web Dev   | offline      | @anjato     |200439921549377536|
| Moderator | KBD          | @KBD        |132004845275054081|
</div>
</ContentBlock>

:::hidden

## Change log

:::

<ChangelogIntro changes={changes}>

</ChangelogIntro>
