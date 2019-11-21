---
title: Getting started
date: 2018-09-15 07:42:34
slug: introduction/getting-started
parentId: gettingStarted
---
import Next from '~/components/Next.vue'
import Block from '~/components/Block.vue'
import Goals from '~/sections/getting-started/goals.md'
import InstallCLI from '~/sections/getting-started/install-cli.md'
import CreateTemplates from '~/sections/getting-started/create-templates.md'
import Prototype from '~/sections/getting-started/prototype-offline.md'
import InstallSDK from '~/sections/getting-started/install-sdk.md'
import UseSDK from '~/sections/getting-started/use-sdk.md'
import Production from '~/sections/getting-started/production.md'

<Block>
  <Goals/>
</Block>

<Block pretext="step 1">
  <InstallCLI />
</Block>

<Block pretext="step 2">
  <CreateTemplates />
</Block>

<Block pretext="step 3">
  <Prototype />
</Block>

<Block pretext="step 4">
  <InstallSDK />
</Block>

<Block pretext="step 5">
  <UseSDK />
</Block>

<Block pretext="step 6">
  <Production />
</Block>

<Next message="Nice job 🏆. Keep going to learn how to get the best out of templates." to="/reference/templates"/>
