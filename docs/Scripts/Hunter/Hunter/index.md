---
title: Hunter
description: Trains Hunter.
# Slug is the URL path for this page.
slug: /Hunter
---

import React from 'react';
import TopBanner from '@site/src/components/TopBanner';
import ContentBlock from '@site/src/components/ContentBlock';
import Changelog from '@site/src/components/Changelog';
import BrowserWindow from '@site/src/components/BrowserWindow';
import changes from './changes.json'

<TopBanner title="Hunter" version="v1.1" author="sadness" skill="Hunter">
</TopBanner>

:::hidden

## Cost

:::

<ContentBlock title="Cost">

> - FREE

</ContentBlock>

:::hidden

## Features

:::

<ContentBlock title="Features">
The hunter script includes support for Whirligigs and all skill/chinchompas. It will automatically travel to the correct area, as well as deploy, catch and rebuild traps. 

Additional creatures will be supported at a later date. The script uses the BotWithUs nav system to navigate to specific locations within the creature area, which have been defined to ensure there are no conflicts with objects when deploying traps. The initial start selection is randomised based on the defined area.

## Supported Creatures
> - Cobalt skillchompa
> - Viridian skillchompa
> - Azure skillchompa
> - Crimson skillchompa
> - Crystal skillchompa
> - Chinchompa
> - Carnivourous chinchompa
> - Wirligigs

### Coming soon
> - Charmimg moths
> - Grenwall
> - Jadinkos
> - Salamanders

## Supported Traps/Bait
> - Box traps
> - Flowers (for Whirligigs)

</ContentBlock>

:::hidden

## Requirements

:::
<ContentBlock title="Requirements">

> - Select your desired animal to hunt
> - Select the number of traps your level is able to deploy (if using box traps)
> - Click start script

</ContentBlock>

<ContentBlock title="To-Do List">

> - Add the option to randomise the catch/redeployment order. Currently the script will process from east to west based on how traps are deployed
> - Add support for scentless potions
> - Automatic level detection to auto-select your allowed deployed trap limit
> - Automatic travel to the highest chompa you can catch
> - Dynamically select a location within the hunter training area that does not contain obsticles/objects based on the number of allowed traps
> - Add stats tab to the ImGui for XP and catches per hour
> - Add support for trap smoking
> - Randomly redeploy all traps to a different location to simulate human behaviour
> - Add task queue system to allow for end-to-end hunter training

</ContentBlock>

:::hidden
## Changelog

:::

<Changelog changes={changes}>

</Changelog>
