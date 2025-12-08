import GuestLayout from '@/Layouts/GuestLayout';
import Button from '@/Components/Common/Button';
import Input from '@/Components/Common/Input';
import { useForm, Link } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function Login() {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    post('/login');
  };

  return (
    <GuestLayout title="Login">
      <form onSubmit={submit} className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h2>
          <p className="text-gray-600">Sign in to your account</p>
        </div>

        <Input
          label="Email"
          type="email"
          value={data.email}
          onChange={(e) => setData('email', e.target.value)}
          error={errors.email}
          required
          autoFocus
          placeholder="admin@example.com"
        />

        <Input
          label="Password"
          type="password"
          value={data.password}
          onChange={(e) => setData('password', e.target. value)}
          error={errors. password}
          required
          placeholder="••••••••"
        />

        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={data. remember}
              onChange={(e) => setData('remember', e. target.checked)}
              className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
            />
            <span className="ml-2 text-sm text-gray-600">Remember me</span>
          </label>

          <Link
            href="/forgot-password"
            className="text-sm text-primary-600 hover:text-primary-800"
          >
            Forgot password?
          </Link>
        </div>

        <Button type="submit" loading={processing} className="w-full">
          Sign In
        </Button>
      </form>
    </GuestLayout>
  );
}
