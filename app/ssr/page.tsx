'use server'

import Link from 'next/link';
import { use } from 'react';

interface User {
  Name: string;
  Age: number;
  Gender: string;
  Email: string;
}

async function getUsers(): Promise<User[]> {
  const response = await fetch('https://nextjs.centralindia.cloudapp.azure.com/users/users.json', {
    cache: 'no-store'
  });
  const data = await response.json();
  console.log('Users fetched on server:', data.User.length);
  return data.User;
}

export default async function SSRPage() {

  const users = await getUsers();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-8">
      <main className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <img src="/file.svg" alt="File" className="w-12 h-12 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-green-600">Server Side Rendering...</h1>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {users.map((user, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h3 className="font-bold text-lg">{user.Name}</h3>
              <p>Age: {user.Age}</p>
              <p>Gender: {user.Gender}</p>
              <p>Email: {user.Email}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/"
            className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}