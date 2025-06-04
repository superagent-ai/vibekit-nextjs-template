'use client'

import { useState } from 'react'
import { generateCode } from './actions'

export default function Home() {
  const [prompt, setPrompt] = useState('')
  const [result, setResult] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!prompt.trim()) return

    setIsLoading(true)
    try {
      const response = await generateCode(prompt)
      setResult(response)
    } catch (error) {
      setResult({ success: false, error: 'Failed to generate code' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">VibeKit Code Generator</h1>
          <p className="text-slate-300">Generate code using AI-powered VibeKit</p>
        </div>

        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex flex-col gap-4">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter your code generation prompt here..."
              className="w-full p-4 rounded-lg bg-slate-800 text-white border border-slate-600 focus:border-blue-500 focus:outline-none resize-none h-32"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !prompt.trim()}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              {isLoading ? 'Generating...' : 'Generate Code'}
            </button>
          </div>
        </form>

        {result && (
          <div className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Result:</h2>
            {result.success ? (
              <pre className="bg-slate-900 p-4 rounded text-green-400 overflow-auto">
                {JSON.stringify(result.result, null, 2)}
              </pre>
            ) : (
              <div className="text-red-400">
                <p>Error: {result.error}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
