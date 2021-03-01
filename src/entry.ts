import { APIGatewayProxyHandler } from "aws-lambda";

export const handler: APIGatewayProxyHandler = async (event) => {
    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
            message: "hello AWS CDK!",
        }),
    };
};
