import { usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import Toast from './Toast';
import { PageProps } from '@/types';

export default function ToastContainer() {
  const { flash } = usePage<PageProps>().props;
  const [toasts, setToasts] = useState<Array<{ id: number; message: string; type: 'success' | 'error' }>>([]);

  useEffect(() => {
    if (flash?.success) {
      setToasts((prev) => [...prev, { id: Date.now(), message: flash.success!, type: 'success' }]);
    }
    if (flash?.error) {
      setToasts((prev) => [...prev, { id: Date.now(), message: flash.error!, type: 'error' }]);
    }
  }, [flash]);

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <div className="fixed top-4 right-4 z-50 space-y-4">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
}
