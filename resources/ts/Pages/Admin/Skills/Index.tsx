import AdminLayout from '@/Layouts/AdminLayout';
import DataTable from '@/Components/Admin/DataTable';
import Button from '@/Components/Common/Button';
import Modal from '@/Components/Common/Modal';
import Input from '@/Components/Common/Input';
import { useForm, router } from '@inertiajs/react';
import { PencilIcon, TrashIcon, PlusIcon } from '@heroicons/react/24/outline';
import { Skill } from '@/types';
import { FormEventHandler, useState } from 'react';

interface SkillsIndexProps {
  skills: Skill[];
}

export default function SkillsIndex({ skills }: SkillsIndexProps) {
  const [showModal, setShowModal] = useState(false);
  const [editingSkill, setEditingSkill] = useState<Skill | null>(null);
  const [deleting, setDeleting] = useState<number | null>(null);

  const { data, setData, post, put, processing, errors, reset } = useForm({
    name: '',
    category: '',
    proficiency: 'beginner' as 'beginner' | 'intermediate' | 'advanced' | 'expert',
    icon: '',
  });

  const openCreateModal = () => {
    reset();
    setEditingSkill(null);
    setShowModal(true);
  };

  const openEditModal = (skill: Skill) => {
    setEditingSkill(skill);
    setData({
      name: skill.name,
      category: skill.category,
      proficiency: skill.proficiency,
      icon: skill.icon || '',
    });
    setShowModal(true);
  };

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    if (editingSkill) {
      put(`/admin/skills/${editingSkill.id}`, {
        onSuccess: () => {
          setShowModal(false);
          reset();
        },
      });
    } else {
      post('/admin/skills', {
        onSuccess: () => {
          setShowModal(false);
          reset();
        },
      });
    }
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this skill?')) {
      setDeleting(id);
      router.delete(`/admin/skills/${id}`, {
        onFinish: () => setDeleting(null),
      });
    }
  };

  const proficiencyColors = {
    beginner: 'bg-yellow-100 text-yellow-700',
    intermediate: 'bg-blue-100 text-blue-700',
    advanced: 'bg-green-100 text-green-700',
    expert: 'bg-purple-100 text-purple-700',
  };

  const columns = [
    {
      key: 'name',
      label: 'Name',
      render: (skill: Skill) => (
        <div className="flex items-center space-x-2">
          {skill.icon && <span className="text-2xl">{skill.icon}</span>}
          <span className="font-medium text-gray-900">{skill.name}</span>
        </div>
      ),
    },
    {
      key: 'category',
      label: 'Category',
      render: (skill: Skill) => (
        <span className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full">
          {skill.category}
        </span>
      ),
    },
    {
      key: 'proficiency',
      label: 'Proficiency',
      render: (skill: Skill) => (
        <span className={`px-3 py-1 text-sm rounded-full capitalize ${proficiencyColors[skill.proficiency]}`}>
          {skill.proficiency}
        </span>
      ),
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (skill: Skill) => (
        <div className="flex items-center space-x-2">
          <button
            onClick={() => openEditModal(skill)}
            className="p-2 text-gray-600 hover:text-primary-600 rounded-lg hover:bg-gray-100"
            title="Edit"
          >
            <PencilIcon className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleDelete(skill.id)}
            disabled={deleting === skill.id}
            className="p-2 text-gray-600 hover:text-red-600 rounded-lg hover:bg-gray-100 disabled:opacity-50"
            title="Delete"
          >
            <TrashIcon className="w-5 h-5" />
          </button>
        </div>
      ),
    },
  ];

  const categories = ['Frontend', 'Backend', 'Database', 'DevOps', 'Tools', 'Other'];
  const proficiencyLevels: Array<'beginner' | 'intermediate' | 'advanced' | 'expert'> = [
    'beginner',
    'intermediate',
    'advanced',
    'expert',
  ];

  return (
    <AdminLayout title="Skills">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Skills</h2>
          <p className="text-gray-600">Manage your technical skills</p>
        </div>
        <Button onClick={openCreateModal}>
          <PlusIcon className="w-5 h-5 mr-2" />
          New Skill
        </Button>
      </div>

      <DataTable columns={columns} data={skills} />

      {/* Create/Edit Modal */}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        title={editingSkill ? 'Edit Skill' : 'Create Skill'}
        maxWidth="md"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Skill Name"
            value={data.name}
            onChange={(e) => setData('name', e.target.value)}
            error={errors.name}
            required
            placeholder="React"
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category <span className="text-red-500">*</span>
            </label>
            <select
              value={data.category}
              onChange={(e) => setData('category', e.target.value)}
              className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              required
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="mt-1 text-sm text-red-600">{errors.category}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Proficiency Level <span className="text-red-500">*</span>
            </label>
            <select
              value={data.proficiency}
              onChange={(e) => setData('proficiency', e.target.value as 'beginner' | 'intermediate' | 'advanced' | 'expert')}
              className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              required
            >
              {proficiencyLevels.map((level) => (
                <option key={level} value={level}>
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </option>
              ))}
            </select>
            {errors.proficiency && (
              <p className="mt-1 text-sm text-red-600">{errors.proficiency}</p>
            )}
          </div>

          <Input
            label="Icon (Emoji or Icon Code)"
            value={data.icon}
            onChange={(e) => setData('icon', e.target.value)}
            error={errors.icon}
            placeholder="⚛️ or any emoji"
          />

          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="secondary"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </Button>
            <Button type="submit" loading={processing}>
              {editingSkill ? 'Update' : 'Create'}
            </Button>
          </div>
        </form>
      </Modal>
    </AdminLayout>
  );
}
