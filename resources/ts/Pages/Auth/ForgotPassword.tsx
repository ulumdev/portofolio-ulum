import GuestLayout from '@/Layouts/GuestLayout';
import Button from '@/Components/Common/Button';
import Input from '@/Components/Common/Input';
import { useForm, Link } from '@inertiajs/react';
import { FormEventHandler } from 'react';

interface ForgotPasswordProps {
  status?: string;
}

export default function ForgotPassword({ status }: ForgotPasswordProps) {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    post('/forgot-password');
  };

  return (
    <GuestLayout title="Forgot Password">
      <div className="mb-4 text-sm text-gray-600">
        Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.
      </div>

      {status && (
        <div className="mb-4 font-medium text-sm text-green-600">
          {status}
        </div>
      )}

      <form onSubmit={submit} className="space-y-6">
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

        <div className="flex items-center justify-between">
          <Link
            href="/login"
            className="text-sm text-primary-600 hover:text-primary-800"
          >
            Back to login
          </Link>

          <Button type="submit" loading={processing}>
            Email Password Reset Link
          </Button>
        </div>
      </form>
    </GuestLayout>
  );
}
