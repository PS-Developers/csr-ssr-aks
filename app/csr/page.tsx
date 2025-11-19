'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface User {
  Name: string;
  Age: number;
  Gender: string;
  Email: string;
}

export default function CSRPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      console.log('Fetching users on client side');
      const response = await fetch('https://nextjs.centralindia.cloudapp.azure.com/users/users.json', {
        cache: 'no-store'
      }); const data = await response.json();
      console.log('Users fetched on client:', data.User.length);
      setUsers(data.User);
      setLoading(false);
    };
    console.log('CSR Page rendering on client');
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-8">
      <main className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <img src="/globe.svg" alt="Globe" className="w-12 h-12 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-blue-600">Client Side Rendering</h1>
        </div>
        {loading ? (
          <p className="text-center text-lg text-gray-600">Loading...</p>
        ) : (
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
        )}
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