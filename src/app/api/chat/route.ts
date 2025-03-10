import { deepseek } from '@ai-sdk/deepseek';
import { streamText } from 'ai';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result =  streamText({
    model: deepseek('deepseek-reasoner'),
    messages:messages
  });

  const dataReturn = result.toDataStreamResponse({
    sendReasoning: true,
  });

  // const apiKey = process.env.DEEPSEEK_API_KEY;
  // console.log('API Key:', apiKey); 
  //console.log(dataReturn);
  return dataReturn;
}


