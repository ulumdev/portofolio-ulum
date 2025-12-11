import AdminLayout from '@/Layouts/AdminLayout';
import DataTable from '@/Components/Admin/DataTable';
import Button from '@/Components/Common/Button';
import { Link, router } from '@inertiajs/react';
import { PencilIcon, TrashIcon, PlusIcon, BriefcaseIcon } from '@heroicons/react/24/outline';
import { Experience } from '@/types';
import { useState } from 'react';

interface ExperiencesIndexProps {
  experiences: Experience[];
}

export default function ExperiencesIndex({ experiences }: ExperiencesIndexProps) {
  const [deleting, setDeleting] = useState<number | null>(null);

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this experience?')) {
      setDeleting(id);
      router.delete(`/admin/experiences/${id}`, {
        onFinish: () => setDeleting(null),
      });
    }
  };

  const employmentTypeColors:  Record<string, string> = {
    'full-time': 'bg-blue-100 text-blue-800',
    'part-time': 'bg-green-100 text-green-800',
    'contract': 'bg-purple-100 text-purple-800',
    'freelance': 'bg-orange-100 text-orange-800',
    'internship': 'bg-pink-100 text-pink-800',
  };

  const columns = [
    {
      key: 'company_logo',
      label: 'Logo',
      render: (experience: Experience) => (
        experience.company_logo ? (
          <img
            src={`/storage/${experience.company_logo}`}
            alt={experience.company}
            className="w-12 h-12 rounded-lg object-cover"
          />
        ) : (
          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
            <BriefcaseIcon className="w-6 h-6 text-primary-600" />
          </div>
        )
      ),
    },
    {
      key: 'position',
      label: 'Position',
      render: (experience: Experience) => (
        <div>
          <p className="font-medium text-gray-900">{experience.position}</p>
          <p className="text-sm text-gray-500">{experience.company}</p>
        </div>
      ),
    },
    {
      key: 'employment_type',
      label: 'Type',
      render: (experience: Experience) => (
        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${employmentTypeColors[experience.employment_type]}`}>
          {experience.employment_type. charAt(0).toUpperCase() + experience.employment_type.slice(1).replace('-', ' ')}
        </span>
      ),
    },
    {
      key: 'date_range',
      label: 'Period',
      render: (experience:  Experience) => (
        <div>
          <p className="text-sm text-gray-900">{experience.date_range}</p>
          <p className="text-xs text-gray-500">{experience.duration}</p>
        </div>
      ),
    },
    {
      key: 'status',
      label: 'Status',
      render: (experience:  Experience) => (
        <div className="flex items-center space-x-2">
          {experience.is_current && (
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
              Current
            </span>
          )}
          {experience.is_featured && (
            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full">
              Featured
            </span>
          )}
        </div>
      ),
    },
    {
      key:  'actions',
      label: 'Actions',
      render: (experience:  Experience) => (
        <div className="flex items-center space-x-2">
          <Link
            href={`/admin/experiences/${experience.id}/edit`}
            className="p-2 text-gray-600 hover:text-primary-600 rounded-lg hover: bg-gray-100"
            title="Edit"
          >
            <PencilIcon className="w-5 h-5" />
          </Link>
          <button
            onClick={() => handleDelete(experience.id)}
            disabled={deleting === experience.id}
            className="p-2 text-gray-600 hover:text-red-600 rounded-lg hover: bg-gray-100 disabled:opacity-50"
            title="Delete"
          >
            <TrashIcon className="w-5 h-5" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <AdminLayout title="Experiences">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Work Experiences</h2>
          <p className="text-gray-600">Manage your work history and professional experiences</p>
        </div>
        <Link href="/admin/experiences/create">
          <Button>
            <PlusIcon className="w-5 h-5 mr-2" />
            New Experience
          </Button>
        </Link>
      </div>

      <DataTable columns={columns} data={experiences} />
    </AdminLayout>
  );
}
