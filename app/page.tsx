import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-bold text-xl shadow-lg">
            VibeKit
          </div>
          <span className="text-gray-600 dark:text-gray-400">+</span>
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </div>
        <div className="text-center sm:text-left">
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Welcome to VibeKit
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            The ultimate UI component library for modern web applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-2 text-purple-600">Modern Design</h3>
            <p className="text-gray-600 dark:text-gray-400">Beautiful, responsive components built with Tailwind CSS</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">TypeScript Ready</h3>
            <p className="text-gray-600 dark:text-gray-400">Full TypeScript support with intelligent autocompletion</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-2 text-indigo-600">Easy to Use</h3>
            <p className="text-gray-600 dark:text-gray-400">Simple API with extensive customization options</p>
          </div>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium text-sm sm:text-base h-12 px-6 hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg">
            Get Started with VibeKit
          </button>
          <button className="rounded-full border border-purple-600 text-purple-600 dark:text-purple-400 font-medium text-sm sm:text-base h-12 px-6 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-200">
            View Components
          </button>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
