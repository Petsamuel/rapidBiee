import { Configuration, OpenAIApi } from 'openai'

export const services = [{
    logo: "",
    keyword: "KeyWords",
    description: "Extract Keyword from a block of text"
},
{
    logo: "",
    keyword: "Grammer Correction",
    description: "Extract Keyword from a block of text"
},
{
    logo: "",
    keyword: "Eassy Outline",
    description: "Extract Keyword from a block of text"
}]

const config = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI
})
const openai = new OpenAIApi(config)
const response = openai.retrieveModel("text-davinci-003");
console.log(response)
