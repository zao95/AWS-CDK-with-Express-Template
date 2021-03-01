#!/usr/bin/env node

import { App } from '@aws-cdk/core'

import { ExpressStack } from './express-stack'

const app = new App()

new ExpressStack(app, 'SampleExpressStack')
