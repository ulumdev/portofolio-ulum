import AdminLayout from '@/Layouts/AdminLayout';
import Button from '@/Components/Common/Button';
import { Link, router } from '@inertiajs/react';
import { ArrowLeftIcon, TrashIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { ContactMessage } from '@/types';

interface MessageShowProps {
  message: ContactMessage;
}

export default function MessageShow({ message }: MessageShowProps) {
  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this message?')) {
      router.delete(`/admin/messages/${message.id}`, {
        onSuccess: () => router.visit('/admin/messages'),
      });
    }
  };

  const handleReply = () => {
    window.location.href = `mailto:${message.email}? subject=Re: ${message.subject}`;
  };

  return (
    <AdminLayout title="View Message">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/admin/messages"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Back to Messages
          </Link>
          <div className="flex space-x-2">
            <Button variant="secondary" onClick={handleReply}>
              <EnvelopeIcon className="w-5 h-5 mr-2" />
              Reply
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              <TrashIcon className="w-5 h-5 mr-2" />
              Delete
            </Button>
          </div>
        </div>

        {/* Message Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Message Header */}
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {message.subject}
            </h1>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {message.name. charAt(0). toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{message.name}</p>
                  <a
                    href={`mailto:${message.email}`}
                    className="text-sm text-primary-600 hover:text-primary-800"
                  >
                    {message.email}
                  </a>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">
                  {new Date(message.created_at). toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
                <p className="text-sm text-gray-500">
                  {new Date(message.created_at).toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* Message Body */}
          <div className="px-6 py-8">
            <div className="prose max-w-none">
              <p className="text-gray-800 whitespace-pre-wrap leading-relaxed">
                {message.message}
              </p>
            </div>
          </div>

          {/* Message Footer */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <span
                className={`px-3 py-1 text-sm rounded-full ${
                  message.is_read
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}
              >
                {message.is_read ? 'Read' : 'Unread'}
              </span>
              <Button onClick={handleReply}>Reply via Email</Button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
