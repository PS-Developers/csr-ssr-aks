interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: number;
  image: string;
  company: {
    name: string;
    title: string;
  };
}

export default async function UsersPage() {
  const res = await fetch('https://dummyjson.com/users');
  const data = await res.json();
  const users: User[] = data.users;

  const colors = [
    'from-pink-500 to-rose-500',
    'from-blue-500 to-cyan-500', 
    'from-purple-500 to-indigo-500',
    'from-green-500 to-emerald-500',
    'from-orange-500 to-red-500',
    'from-teal-500 to-blue-500'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            List of Users
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Meet our amazing community</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {users.map((user, index) => (
            <div
              key={user.id}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${colors[index % colors.length]} opacity-90`}></div>
              <div className="relative bg-white/90 dark:bg-black/80 backdrop-blur-sm p-6 h-full">
                <div className="flex items-center mb-4">
                  <img src={user.image} alt={user.firstName} className="w-16 h-16 rounded-full mr-4" />
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-white transition-colors">
                      {user.firstName} {user.lastName}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Age: {user.age}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="p-2 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                    <span className="font-semibold text-gray-700 dark:text-gray-200">Email:</span>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{user.email}</p>
                  </div>
                  <div className="p-2 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                    <span className="font-semibold text-gray-700 dark:text-gray-200">Phone:</span>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{user.phone}</p>
                  </div>
                  <div className="p-2 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                    <span className="font-semibold text-gray-700 dark:text-gray-200">Company:</span>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{user.company.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{user.company.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}