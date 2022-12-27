import { Handler, Context } from 'aws-lambda';

/* ----------------

curl --location --request POST 'https://business-api.tiktok.com/open_api/v1.2/pixel/track/'   --header 'Access-Token: ACCESS_TOKEN'   --header 'Content-Type: application/json'   --data-raw '{
    "pixel_code": "CELJF8BC77UD28TRFBF0",
    "event": "InitiateCheckout",
    "event_id":"1616318632825_357",
    "timestamp": "2020-09-17T19:49:27Z",
    "context": {
      "ad": {
        "callback": "123ATXSfe"
      },
      "page": {
        "url": "http://demo.mywebsite.com/purchase",
        "referrer": "http://demo.mywebsite.com"
      },
      "user": {
        "external_id": "f0e388f53921a51f0bb0fc8a2944109ec188b59172935d8f23020b1614cc44bc",
        "phone_number": "2f9d2b4df907e5c9a7b3434351b55700167b998a83dc479b825096486ffcf4ea",
        "email": "dd6ff77f54e2106661089bae4d40cdb600979bf7edc9eb65c0942ba55c7c2d7f"
      },
      "user_agent": "Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion",
      "ip": "13.57.97.131"
    }
  }' 
  
******************************** */
export const lambdaHandler:Handler = async (event:any, context:Context): Promise<any> => {
    const output = { message: "Hello World!" }
    return new Promise((resolve, reject) => {
        resolve(output)
    })
}