import { sql } from '@/lib/neon';

async function getData() {
  try {
    const response = await sql`SELECT version()`;
    return response[0].version;
  } catch (error) {
    console.error('Database connection error:', error);
    return null;
  }
}

export default async function DatabasePage() {
  const data = await getData();
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Database Connection Test</h1>
      {data ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          <p className="font-semibold">Database connected successfully!</p>
          <p className="text-sm">PostgreSQL version: {data}</p>
        </div>
      ) : (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p className="font-semibold">Database connection failed</p>
          <p className="text-sm">Please check your DATABASE_URL configuration</p>
        </div>
      )}
    </div>
  );
}