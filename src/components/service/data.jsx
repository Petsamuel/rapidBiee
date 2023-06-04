import { Configuration, OpenAIApi } from 'openai'

export const services = [{

    name: "KeyWords",
    description: "Extract Keyword from a block of text"
},
{

    name: "Grammer Correction",
    description: "Extract Keyword from a block of text"
},
{

    name: "Eassy Outline",
    description: "Extract Keyword from a block of text"
}]

const config = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI
})
const openai = new OpenAIApi(config)
const response = openai.retrieveModel("text-davinci-003");
console.log(response)
