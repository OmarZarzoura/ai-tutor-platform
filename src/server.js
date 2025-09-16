import express from 'express'
import { z } from 'zod'

const app = express()
app.use(express.json())

const Challenge = z.object({
  topic: z.string(),
  level: z.enum(['beginner','intermediate','advanced'])
})

app.post('/api/challenge', (req,res)=>{
  const parsed = Challenge.safeParse(req.body)
  if(!parsed.success) return res.status(400).json(parsed.error)
  const { topic, level } = parsed.data
  const prompt = `Write a small ${topic} task for a ${level} learner with clear steps.`
  // Stubbed response (replace with LLM later)
  return res.json({ challenge: `TODO: ${prompt}` })
})

app.get('/api/health', (_,res)=>res.json({ok:true}))

app.listen(3000, ()=>console.log("AI Tutor running on http://localhost:3000"))
