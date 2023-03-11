import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Home() {
  const [prompt, setPrompt] = useState("")
  const [result, setResult] = useState("")
  const [arr, setArr] = useState([])

  useEffect(() => {
    console.log('arr changing..')
    console.log(arr)
  }, [arr])

  const submit = async () => {
    const endPoint = "/api/hello"
    const res = await axios.post(endPoint, {
      prompt: prompt
    })
    
    const _result = res.data.result
    const el = {
      prompt: prompt,
      result: _result
    }

    setArr(prev => [...prev, el])
    setResult(_result)
    setPrompt("")
  }

  //state 

  return (
    <>
      <div>hello world</div>
      <input value={prompt} onChange={e => setPrompt(e.target.value)} />
      <button onClick={e => submit()}>send</button>
      {result}

      <span>jsx</span>

      <br /><br />

      {
        arr.map((el, index) => {
          return <div key={index}>

            <div>{el.prompt}</div>
            <div>{el.result}</div>
            <br/>
          </div>
        })
      }


    </>
  )
}
