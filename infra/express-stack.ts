import { LambdaRestApi } from '@aws-cdk/aws-apigateway'
import { Code, Function as LFunction, Runtime } from '@aws-cdk/aws-lambda'
import { Construct, Stack, StackProps } from '@aws-cdk/core'
import { join } from 'path'

export class ExpressStack extends Stack {
    public constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props)

        const code = Code.fromAsset(join(__dirname, '../dist'))

        new LambdaRestApi(this, 'Express', {
            handler: new LFunction(this, 'HomeHandler', {
                runtime: Runtime.NODEJS_12_X,
                code,
                handler: 'entry.handler',
            }),
        })
    }
}
