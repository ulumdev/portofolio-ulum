import AdminLayout from '@/Layouts/AdminLayout';
import DataTable from '@/Components/Admin/DataTable';
import Button from '@/Components/Common/Button';
import { Link, router } from '@inertiajs/react';
import { PencilIcon, TrashIcon, PlusIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import { Education } from '@/types';
import { useState } from 'react';

interface EducationsIndexProps {
  educations: Education[];
}

export default function EducationsIndex({ educations }: EducationsIndexProps) {
  const [deleting, setDeleting] = useState<number | null>(null);

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this education?')) {
      setDeleting(id);
      router.delete(`/admin/educations/${id}`, {
        onFinish: () => setDeleting(null),
      });
    }
  };

  const columns = [
    {
      key: 'institution_logo',
      label: 'Logo',
      render: (education: Education) => (
        education.institution_logo ? (
          <img
            src={`/storage/${education.institution_logo}`}
            alt={education.institution}
            className="w-12 h-12 rounded-lg object-cover"
          />
        ) : (
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
            <AcademicCapIcon className="w-6 h-6 text-indigo-600" />
          </div>
        )
      ),
    },
    {
      key: 'degree',
      label: 'Degree',
      render: (education: Education) => (
        <div>
          <p className="font-medium text-gray-900">{education.degree}</p>
          <p className="text-sm text-gray-500">{education.institution}</p>
        </div>
      ),
    },
    {
      key: 'field_of_study',
      label: 'Field of Study',
      render: (education: Education) => (
        <span className="text-sm text-gray-600">
          {education.field_of_study || '-'}
        </span>
      ),
    },
    {
      key: 'date_range',
      label: 'Period',
      render: (education: Education) => (
        <div>
          <p className="text-sm text-gray-900">{education.date_range}</p>
        </div>
      ),
    },
    {
      key: 'status',
      label: 'Status',
      render: (education: Education) => (
        <div className="flex items-center space-x-2">
          {education.is_current && (
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
              Current
            </span>
          )}
        </div>
      ),
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (education: Education) => (
        <div className="flex items-center space-x-2">
          <Link
            href={`/admin/educations/${education.id}/edit`}
            className="p-2 text-gray-600 hover:text-indigo-600 rounded-lg hover:bg-gray-100"
            title="Edit"
          >
            <PencilIcon className="w-5 h-5" />
          </Link>
          <button
            onClick={() => handleDelete(education.id)}
            disabled={deleting === education.id}
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
    <AdminLayout title="Educations">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Education History</h2>
          <p className="text-gray-600">Manage your educational background</p>
        </div>
        <Link href="/admin/educations/create">
          <Button>
            <PlusIcon className="w-5 h-5 mr-2" />
            New Education
          </Button>
        </Link>
      </div>

      <DataTable columns={columns} data={educations} />
    </AdminLayout>
  );
}
