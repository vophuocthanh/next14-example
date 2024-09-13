'use client';

import { authLogin } from '@/app/api/auth/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await authLogin(email, password);
      router.push('/');
    } catch (error) {
      setError('Đăng nhập thất bại');
    }
  };

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type='email'
            value={email}
            className='mt-2 text-black'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='mt-2 text-black'
          />
        </div>
        <button type='submit'>Đăng nhập</button>
      </form>
    </div>
  );
};

export default LoginForm;
