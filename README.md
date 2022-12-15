# OpenAI API Completion Shortcut for MacOS
Simple automation that allows you to prompt text copied from clipboard to OpenAI models. 
It automatically copies response to clipboard and tries to paste below current line.

## 🪛 Setup
1. Paste your OpenAI API key to **.env** file to entry `OPENAI_API_KEY`
2. Run `npm install && npm run build`
3. Test if your script is executing without any error
4. Import Shortcuts file from this repo to your Mac. In Shortcut script you have to change executed shell script. Provide there correct path to your Node.js bin location and **build/index.js** file.



