---
title: Wiki Contriutions
description: How to contribute to our wiki.
slug: /contributing-to-wiki
---

import React from 'react';
import ContentBlock from '@site/src/components/ContentBlock';
import BrowserWindow from '@site/src/components/BrowserWindow';



:::hidden
## Locating our wiki files
:::

<ContentBlock title="Locating our wiki files">
<BrowserWindow url="https://github.com/BotWithUs/BwuWiki">

- Our wiki is completely open source, you can find the code <u>[**here**](https://github.com/BotWithUs/BwuWiki)</u>.
- This wiki is a NodeJS project, which means you can run the code locally yourself, all while it updates in real time in your local browser once you save files.
- The minimum supported NodeJS Version is 18

:::info You can help!
    If you'd like to contriubute, you can by making a [**pull request**](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) to our [**master branch**](https://github.com/BotWithUs/BwuWiki)!
:::

</BrowserWindow>

</ContentBlock>

:::hidden
## Getting setup
:::
<ContentBlock title="Getting setup">
> - First, let's make sure that you have [**NodeJS 18+**](https://nodejs.org/en/download) installed.
> - Then, install yarn, the package manager for this project:
```bash
npm install --global yarn
```
> - Next, you'll need to make sure that you have [**Git**](https://git-scm.com/downloads) or [**GitHub Desktop**](https://desktop.github.com/) installed.
> - Then, clone our code using GitHub Desktop, or the following command:
```bash
git clone https://github.com/BotWithUs/BwuWiki
```
:::info Before proceeding
You should make a new branch as you cannot commit changes to master. Or you can fork the repository.
:::

> - Inside of the BwuWiki folder, run the following command to install dependencies:
```bash
yarn
```
> - Now you are all set to run the project locally!
```bash
yarn start
```
While the server is running, any changes you make to markdown files and save, will reflect live in your local browser.

</ContentBlock>

:::hidden
## Making your changes live
:::
<ContentBlock title="Making your changes live">
- Once you've finished your contributions, they need to be merged into the master branch of [**BwuWiki**](https://github.com/BotWithUs/BwuWiki) in order to be live on [**https://wiki.botwithus.net**](https://wiki.botwithus.net)
- While you do not have permission to commit to master, you can submit a [**pull request**](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) to our [**repository pull requests**](https://github.com/BotWithUs/BwuWiki/pulls)
- Once your PR is approved and merged by staff, changes will be live on [**https://wiki.botwithus.net**](https://wiki.botwithus.net) within minutes.
</ContentBlock>