import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({path: __dirname + "/../.env"})
import {Configuration, CreateCompletionRequest, OpenAIApi} from "openai";
import clipboard from "clipboardy";


const configuration = new Configuration({
    organization: "org-LANXlQxNQoKpyIs7DQznV0sp",
    apiKey: process.env.OPENAI_API_KEY,
});

async function prompt(clip: string) {
    const openai = new OpenAIApi(configuration);

    const completionRequest = {
        model: "text-davinci-003",
        prompt: clip,
        temperature: 0.8,
        max_tokens: 2000
    } as CreateCompletionRequest;

    try {
        // "Please generate a joke about entrepreneurs"
        const completion = await openai.createCompletion(completionRequest)
        clipboard.writeSync(completion.data.choices[0].text || '')
    } catch (e) {
        if (e instanceof Error) {
            console.log(e.message)
            clipboard.writeSync(e.message)
        }

    }

}


const cb = clipboard.readSync()

if (cb) {
    prompt(cb);
}


