'use client'

import { useState } from 'react';
import { generateCode } from './actions';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerateCode = async () => {
    if (!prompt.trim()) return;
    
    setLoading(true);
    try {
      const response = await generateCode(prompt);
      setResult(response);
    } catch (error) {
      setResult({ success: false, error: 'Failed to generate code' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center gap-8">
      <h1 className="text-4xl font-bold text-center">VibeKit Code Generator</h1>
      
      <div className="w-full max-w-2xl space-y-4">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your code generation prompt here..."
          className="w-full h-32 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <button
          onClick={handleGenerateCode}
          disabled={loading || !prompt.trim()}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? 'Generating...' : 'Generate Code with VibeKit'}
        </button>
      </div>

      {result && (
        <div className="w-full max-w-2xl">
          <h2 className="text-2xl font-semibold mb-4">Result:</h2>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="whitespace-pre-wrap text-sm">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
