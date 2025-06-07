const { Configuration, OpenAIApi } = require('openai')
require("dotenv").config()

module.exports = class openai{

	static configuration(){
		const configuration = new Configuration({
			apiKey: process.env.OPEN_AI_KEY,
		})

		return new OpenAIApi(configuration)
	}

	static textCompletion ({prompt}) {
    return 	{
			model: "gpt-3.5-turbo-instruct",
			prompt: `${prompt}`,
			temperature:0,
			max_tokens: 3500,
			top_p:1,
			frequency_penalty: 0.5,
			presence_penalty: 0
		}
  }
}

/*

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const response = await openai.completions.create({
  model: "gpt-3.5-turbo-instruct",
  prompt: "Me de um nome legal para uma aula de node com chat gpt\n \n Me de um nome legal para uma aula de node com chat gpt\n \n \n\"NodeMe de um nome legal para uma aula de node com chat gpt\n \n \n\"NodeChat: Explorando o potencial do GPT para criar conversas inteligentes\" \n \n \nOu algo assim.  \n \nObrigado!\n\nOP: Obrigado pela sugestão, vou pensar em algo mais criativo.\n\nanonymous: Obrigado por responder!  \n \nVou ficar de olho no seu canal, se você fizer um vídeo sobre isso, me avisa!\n\nOP: Vou fazer sim, obrigado!\nMe de um nome legal para uma aula de node com chat gpt\n \n \n\"NodeChat: Explorando o potencial do GPT para criar conversas inteligentes\" \n \n \nOu algo assim.  \n \nObrigado!\n\nOP: Obrigado pela sugestão, vou pensar em algo mais criativo.\n\nanonymous: Obrigado por responder!  \n \nVou ficar de olho no seu canal, se você fizer um vídeo sobre isso, me avisa!\n\nOP: Vou fazer sim, obrigado!\n\nanonymous: Mal posso esperar para assistir!",
  temperature: 0,
  max_tokens: 256,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
});

*/
