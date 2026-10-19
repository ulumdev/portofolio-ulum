import GuestLayout from '@/Layouts/GuestLayout';
import Button from '@/Components/Common/Button';
import Input from '@/Components/Common/Input';
import { useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

interface ResetPasswordProps {
  token: string;
  email: string;
}

export default function ResetPassword({ token, email }: ResetPasswordProps) {
  const { data, setData, post, processing, errors, reset } = useForm({
    token: token,
    email: email,
    password: '',
    password_confirmation: '',
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    post('/reset-password', {
      onFinish: () => reset('password', 'password_confirmation'),
    });
  };

  return (
    <GuestLayout title="Reset Password">
      <div className="mb-4 text-sm text-gray-600">
        Please enter your new password below.
      </div>

      <form onSubmit={submit} className="space-y-6">
        <Input
          label="Email"
          type="email"
          value={data.email}
          onChange={(e) => setData('email', e.target.value)}
          error={errors.email}
          required
          autoFocus
        />

        <Input
          label="Password"
          type="password"
          value={data.password}
          onChange={(e) => setData('password', e.target.value)}
          error={errors.password}
          required
          placeholder="••••••••"
        />

        <Input
          label="Confirm Password"
          type="password"
          value={data.password_confirmation}
          onChange={(e) => setData('password_confirmation', e.target.value)}
          error={errors.password_confirmation}
          required
          placeholder="••••••••"
        />

        <div className="flex items-center justify-end">
          <Button type="submit" loading={processing} className="w-full">
            Reset Password
          </Button>
        </div>
      </form>
    </GuestLayout>
  );
}
