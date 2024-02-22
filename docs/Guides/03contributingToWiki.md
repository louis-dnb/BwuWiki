---
title: Wiki Contributions
description: How to contribute to our wiki.
slug: /contributing-to-wiki
---

import React from 'react';
import ContentBlock from '@site/src/components/ContentBlock';
import BrowserWindow from '@site/src/components/BrowserWindow';

:::hidden
## Introduction
:::

<ContentBlock title="Introduction">
<BrowserWindow url="https://github.com/BotWithUs/BwuWiki">

- Our wiki is completely open source, you can find the code <u>[**here**](https://github.com/BotWithUs/BwuWiki)</u>.
- This wiki is a NodeJS project, which means you can run the code locally yourself, all while it updates in real time in your local browser once you save files.
- The minimum supported NodeJS Version is 18
- All wiki pages are [**Markdown**](https://commonmark.org/) files, and are all found in the docs/ folder of the github repo.
- Docusaurus leverages the [**MDX Compiler**](https://mdxjs.com/) to transform markdown syntax into [**React**](https://react.dev/) components, amazing!
- See [**Docussaurus Markdown Features**](https://docusaurus.io/docs/markdown-features) to become a pro at making beautiful pages.

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
>   :::info Install yarn package manager

```bash
npm install --global yarn
```

> - Next, you'll need to make sure that you have [**Git**](https://git-scm.com/downloads) or [**GitHub Desktop**](https://desktop.github.com/) installed.
> - Then, clone our code using GitHub Desktop, or run the following commands:
>   :::info Clone the Wiki repository

```bash
git clone https://github.com/BotWithUs/BwuWiki
cd BwuWiki
```

:::warning Before proceeding
You should make a new branch as you cannot commit changes to master. Or you can fork the repository. If you make a bunch of changes to the locally checked out master branch, you wont be able to push them to the repo.
:::

> - Next, inside of the BwuWiki folder, run the following command to install dependencies:
>   :::info Install project dependencies

```bash
yarn
```

> - Now you are all set to run the project locally!
> - The following command will launch the project locally and connect you to it via your browser.
>   :::info Its local dev time baby!

```bash
yarn start
```

:::warning Changes reflect instantly!
While the server is running, any changes you make to files and save, should reflect live in your local browser.
:::

</ContentBlock>

:::hidden
## Making your changes live
:::

<ContentBlock title="Making your changes live">

- Once you've finished your contributions, commit and push them back to your side branch or forked repo.
- Then, they need to be merged into the master branch of [**BwuWiki**](https://github.com/BotWithUs/BwuWiki) in order to be live on [**https://wiki.botwithus.net**](https://wiki.botwithus.net)
- While you do not have permission to commit to the protected master branch, you can submit a [**pull request**](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) to our [**repository pull requests**](https://github.com/BotWithUs/BwuWiki/pulls)
- Once your PR is approved and merged by staff, changes will be live on [**https://wiki.botwithus.net**](https://wiki.botwithus.net) within minutes.

</ContentBlock>

:::hidden

## Best wiki editing practices

:::

<ContentBlock  title="Best wiki editing practices">
### Clarity and Conciseness:

> - Write in a clear and concise manner to enhance readability.
> - Break down complex information into easily understandable sections.

### Structure and Formatting:

> - Follow the established structure and formatting guidelines of the wiki.
> - Use headers, bullet points, and other formatting tools to organize content effectively.

### Avoid Plagiarism:

> - Always create original content or properly attribute the source if using someone else's work.
> - Respect copyright laws and the intellectual property of others.

### User-Friendly Language:

> - Write in a way that is accessible to a wide audience, avoiding jargon or overly technical language when unnecessary.

### Regular Updates:

> - Keep information up-to-date by revisiting and editing content periodically.
> - Add new information and remove outdated or irrelevant details.
</ContentBlock>
