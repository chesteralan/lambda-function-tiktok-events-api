import { Handler, Context } from 'aws-lambda';

export const lambdaHandler:Handler = async (event:any, context:Context): Promise<any> => {
    const output = { message: "Hello World!" }
    return new Promise((resolve, reject) => {
        resolve(output)
    })
}