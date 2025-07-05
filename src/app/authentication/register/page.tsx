'use client';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { routePaths } from '@/app/common/constants';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  const handleSignup = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      setSuccess('Signup successful! You can now login.');
      setTimeout(() => router.push(routePaths.LOGIN), 1000);
    } else {
      setError(data.error || 'Failed to signup.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form
        onSubmit={handleSignup}
        className="w-full max-w-sm p-8 space-y-4 bg-white rounded shadow"
      >
        <h1 className="text-2xl font-bold">Sign Up</h1>
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
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-2 border rounded"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          required
        />
        {error && (
          <div className="p-2 text-red-600 bg-red-100 rounded">{error}</div>
        )}
        {success && (
          <div className="p-2 text-green-700 bg-green-100 rounded">{success}</div>
        )}
        <button
          type="submit"
          className="w-full py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
            Sign Up
        </button>
        <a
          className="block text-sm text-center text-blue-500 hover:underline"
          href={routePaths.LOGIN}
        >
            Already have an account? Login
        </a>
      </form>
    </div>
  );
}
