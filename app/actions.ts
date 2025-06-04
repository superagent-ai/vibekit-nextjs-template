'use server'

import { VibeKit, VibeConfig } from '@vibe-kit/sdk'

export async function generateCode(prompt: string) {
  try {
    const config: VibeConfig = {
      agent: {
        type: 'codex',
        model: {
          apiKey: process.env.OPENAI_API_KEY || 'sk-proj-****',
        },
      },
      environment: {
        e2b: {
          apiKey: process.env.E2B_API_KEY || 'e2b_****',
        },
      },
      github: {
        token: process.env.GITHUB_TOKEN || 'ghp_****',
        repository: process.env.GITHUB_REPOSITORY || 'superagent-ai/vibekit',
      },
    }

    const vibeKit = new VibeKit(config)

    const result = await vibeKit.generateCode({
      prompt,
      mode: 'code',
    })

    return { success: true, result }
  } catch (error) {
    console.error('VibeKit error:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}