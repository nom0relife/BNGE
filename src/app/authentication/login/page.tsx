'use client';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { routePaths } from '@/app/common/constants';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    const res = await signIn('credentials', {
      email,
      password,
      redirect: false, // Prevent automatic navigation
    });

    if (res?.ok) {
      router.push(routePaths.HOME); // Redirect to home or dashboard
    } else {
      setError(res?.error || 'Invalid credentials');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm p-8 space-y-4 bg-white rounded shadow"
      >
        <h1 className="text-2xl font-bold">Login</h1>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        {error && (
          <div className="p-2 text-red-600 bg-red-100 rounded">{error}</div>
        )}
        <button
          type="submit"
          className="w-full py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
                    Login
        </button>
        <a className="block text-sm text-center text-blue-500 hover:underline"
          href={routePaths.REGISTER}>Don't have an account? Sign up</a>
      </form>
    </div>
  );
}
