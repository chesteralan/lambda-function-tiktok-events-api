import { Handler, Context } from 'aws-lambda';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

type Config = {
  headers: any;
}

const apiUrl:string = 'https://business-api.tiktok.com/open_api/v1.2/pixel/track/';

export const lambdaHandler:Handler = async (event:any, context:Context): Promise<any> => {
  
  const randomEventId = Date.now();
  const timestamp = new Date(Date.now()).toJSON();

  const {
    pixel_code,
    event: tiktokEventName,
    // event_id,
    context: tiktokContext
  } = event;

  const config:Config = {
    headers: {
      "Access-Token": process.env.ACCESS_TOKEN,
      "Content-Type": `application/json`
    }
  };
  
  const data:any = {
    pixel_code,
    event: tiktokEventName,
    event_id: `${randomEventId}_123`,
    timestamp,
    test_event_code: "TEST78246",
    context: tiktokContext
  }

  //return new Promise<any>((resolve) => resolve(data));
  return await axios.post(apiUrl,JSON.stringify(data),config).then(response => {
    return response.data;
  });

}