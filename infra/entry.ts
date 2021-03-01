import { App } from '@aws-cdk/core'

import { RestApiStack } from './restapi-stack'

const app = new App()

new RestApiStack(app, 'WaniSampleRestApiStack')
