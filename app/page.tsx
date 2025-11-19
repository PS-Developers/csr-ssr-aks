import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center gap-8 p-8">
        <h1 className="text-4xl font-bold text-black dark:text-white">
          CSR vs SSR Demo
        </h1>
        <div className="flex gap-4">
          <Link
            href="/csr"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Client Side Rendering
          </Link>
          <Link
            href="/ssr"
            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            Server Side Rendering
          </Link>
          <Link
            href="/products"
            className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
          >
            List of Users
          </Link>
        </div>
      </main>
    </div>
  );
}
