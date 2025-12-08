import AdminLayout from '@/Layouts/AdminLayout';
import DataTable from '@/Components/Admin/DataTable';
import { Link, router } from '@inertiajs/react';
import { EyeIcon, TrashIcon, EnvelopeIcon, EnvelopeOpenIcon } from '@heroicons/react/24/outline';
import { ContactMessage, PaginatedData } from '@/types';
import { useState } from 'react';

interface MessagesIndexProps {
  messages: PaginatedData<ContactMessage>;
}

export default function MessagesIndex({ messages }: MessagesIndexProps) {
  const [deleting, setDeleting] = useState<number | null>(null);

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this message?')) {
      setDeleting(id);
      router.delete(`/admin/messages/${id}`, {
        onFinish: () => setDeleting(null),
      });
    }
  };

  const columns = [
    {
      key: 'is_read',
      label: '',
      render: (message: ContactMessage) => (
        <div className="flex items-center justify-center">
          {message.is_read ? (
            <EnvelopeOpenIcon className="w-5 h-5 text-gray-400" />
          ) : (
            <EnvelopeIcon className="w-5 h-5 text-primary-600" />
          )}
        </div>
      ),
    },
    {
      key: 'name',
      label: 'From',
      render: (message: ContactMessage) => (
        <div>
          <p className={`font-medium ${! message.is_read ? 'text-gray-900' : 'text-gray-600'}`}>
            {message. name}
          </p>
          <p className="text-sm text-gray-500">{message.email}</p>
        </div>
      ),
    },
    {
      key: 'subject',
      label: 'Subject',
      render: (message: ContactMessage) => (
        <span className={! message.is_read ? 'font-semibold text-gray-900' : 'text-gray-600'}>
          {message.subject}
        </span>
      ),
    },
    {
      key: 'message',
      label: 'Message',
      render: (message: ContactMessage) => (
        <p className="text-gray-600 truncate max-w-xs">
          {message.message}
        </p>
      ),
    },
    {
      key: 'created_at',
      label: 'Received',
      render: (message: ContactMessage) => (
        <span className="text-sm text-gray-500">
          {new Date(message.created_at).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })}
        </span>
      ),
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (message: ContactMessage) => (
        <div className="flex items-center space-x-2">
          <Link
            href={`/admin/messages/${message.id}`}
            className="p-2 text-gray-600 hover:text-primary-600 rounded-lg hover:bg-gray-100"
            title="View"
          >
            <EyeIcon className="w-5 h-5" />
          </Link>
          <button
            onClick={() => handleDelete(message. id)}
            disabled={deleting === message.id}
            className="p-2 text-gray-600 hover:text-red-600 rounded-lg hover:bg-gray-100 disabled:opacity-50"
            title="Delete"
          >
            <TrashIcon className="w-5 h-5" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <AdminLayout title="Messages">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Contact Messages</h2>
        <p className="text-gray-600">View and manage incoming messages</p>
      </div>

      <DataTable
        columns={columns}
        data={messages. data}
        pagination={messages}
        onPageChange={(page) => router.get(`/admin/messages?page=${page}`)}
      />
    </AdminLayout>
  );
}
