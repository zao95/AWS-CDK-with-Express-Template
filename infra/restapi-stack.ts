import { LambdaIntegration, RestApi } from '@aws-cdk/aws-apigateway'
import { Code, Function as LFunction, Runtime } from '@aws-cdk/aws-lambda'
import { Construct, Stack, StackProps } from '@aws-cdk/core'
import { join } from 'path'

export class RestApiStack extends Stack {
    public constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props)

        const code = Code.fromAsset(join(__dirname, '../dist'))

        const api = new RestApi(this, 'SampleRestApi', {
            deployOptions: {
                stageName: 'dev',
            },
        })

        api.root.addMethod(
            'GET',
            new LambdaIntegration(
                new LFunction(this, 'HomeHandler', {
                    runtime: Runtime.NODEJS_12_X,
                    code,
                    handler: 'entry.handler',
                })
            )
        )
    }
}
