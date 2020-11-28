import Cors from 'cors'
import type { NextApiRequest, NextApiResponse } from 'next'

const DEPLOYMENTS_URL = 'https://api.github.com/repos/FelixMohr/nextjs-material-ui-blog/deployments'

const cors = Cors({
  methods: ['GET', 'HEAD'],
})

const runMiddleware = (
  req: NextApiRequest,
  res: NextApiResponse,
  fn: (req: NextApiRequest, res: NextApiResponse, f: (result: unknown) => void) => void,
): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  // Run the middleware
  await runMiddleware(req, res, cors)

  const env = 'Preview'

  const statusesUrl = await new Promise<string>((resolve) => {
    fetch(DEPLOYMENTS_URL)
      .then((response) => response.json())
      .then((data) => {
        const matchingData = data.find((d) => d['environment'] === env)
        resolve(matchingData['statuses_url'])
      })
  })
  console.log(statusesUrl)

  const state = await new Promise<string>((resolve) => {
    fetch(statusesUrl)
      .then((response) => response.json())
      .then((data) => resolve(data[0]['state']))
  })
  console.log(state)

  let color = 'green'
  if (state === 'pending' || state === 'queued' || state === 'in_progress') {
    color = 'yellow'
  } else if (state === 'failure' || state === 'error') {
    color = 'red'
  }

  res.json({ schemaVersion: 1, label: 'deployment', message: state, color, namedLogo: 'vercel' })
}

export default handler
