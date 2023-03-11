// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const axios = require('axios')

export default async function handler(req, res) {
  //key 
  //await 

  const key = process.env.OPENAI_KEY
  const endPoint = "https://api.openai.com/v1/completions"
  const _res = await axios.post(endPoint, {
    model: "text-davinci-003",
    prompt: req.body.prompt,
    max_tokens: 100,
    n: 1,
    stop: null,
    temperature: 0.7
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${key}`
    }
  })
  
  const text = _res.data.choices[0].text
  res.status(200).json({ result: text })
}
