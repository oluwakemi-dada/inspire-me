import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

export const Route = createFileRoute("/(auth)/login/")({
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <div className='max-w-md mx-auto'>
      <h1 className='text-3xl font-bold mb-6'>Login</h1>
      {error && (
        <div className='bg-red-100 text-red-700 px-4 py-2 rounded mb-4'>
          {error}
        </div>
      )}
      <form className='space-y-4'>
        <input
          type='email'
          className='w-full border border-gray rounded-md p-2'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete='off'
        />
        <input
          type='password'
          className='w-full border border-gray rounded-md p-2'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete='off'
        />
        <button className='bg-blue-600 hover:bg-blue-700 text-white font-semibold cursor-pointer px-4 py-2 rounded-md w-full disabled:opacity-50'>
          {'Login'}
        </button>
      </form>

      <p className='text-sm text-center mt-4'>
        Don't have an account?{' '}
        <Link
          to='/register'
          className='text-blue-600 hover:underline font-medium'
        >
          Register
        </Link>
      </p>
    </div>
  );
}
