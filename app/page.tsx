import { Heart, Sparkles, Zap, Code, Palette } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-purple-950 dark:via-pink-950 dark:to-indigo-950">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              VibeKit
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Build beautiful, modern web applications with delightful user experiences
          </p>
        </header>

        <main className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-shadow">
              <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/50 w-fit mb-4">
                <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Modern Design</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Clean, beautiful components with smooth animations and thoughtful interactions
              </p>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-shadow">
              <div className="p-3 rounded-full bg-pink-100 dark:bg-pink-900/50 w-fit mb-4">
                <Zap className="w-6 h-6 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Lightning Fast</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Optimized for performance with Next.js 15 and modern web standards
              </p>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-shadow">
              <div className="p-3 rounded-full bg-indigo-100 dark:bg-indigo-900/50 w-fit mb-4">
                <Code className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Developer Friendly</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Built with TypeScript, Tailwind CSS, and modern React patterns
              </p>
            </div>
          </div>

          <div className="text-center mb-16">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 max-w-2xl mx-auto">
              <div className="p-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 w-fit mx-auto mb-6">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Start creating with VibeKit's collection of beautiful, accessible components
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:shadow-lg transition-shadow">
                  Get Started
                </button>
                <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  View Components
                </button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Features</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Responsive design system
                </li>
                <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  Dark mode support
                </li>
                <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  Accessible components
                </li>
                <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  TypeScript support
                </li>
              </ul>
            </div>

            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Tech Stack</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <div className="font-medium text-gray-900 dark:text-white">Next.js 15</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Framework</div>
                </div>
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <div className="font-medium text-gray-900 dark:text-white">Tailwind</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Styling</div>
                </div>
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <div className="font-medium text-gray-900 dark:text-white">TypeScript</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Language</div>
                </div>
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <div className="font-medium text-gray-900 dark:text-white">Lucide</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Icons</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
