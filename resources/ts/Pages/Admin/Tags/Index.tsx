import AdminLayout from '@/Layouts/AdminLayout';
import DataTable from '@/Components/Admin/DataTable';
import Button from '@/Components/Common/Button';
import Modal from '@/Components/Common/Modal';
import Input from '@/Components/Common/Input';
import { useForm, router } from '@inertiajs/react';
import { PencilIcon, TrashIcon, PlusIcon } from '@heroicons/react/24/outline';
import { Tag } from '@/types';
import { FormEventHandler, useState } from 'react';

interface TagsIndexProps {
  tags: Tag[];
}

export default function TagsIndex({ tags }: TagsIndexProps) {
  const [showModal, setShowModal] = useState(false);
  const [editingTag, setEditingTag] = useState<Tag | null>(null);
  const [deleting, setDeleting] = useState<number | null>(null);

  const { data, setData, post, put, processing, errors, reset } = useForm({
    name: '',
  });

  const openCreateModal = () => {
    reset();
    setEditingTag(null);
    setShowModal(true);
  };

  const openEditModal = (tag: Tag) => {
    setEditingTag(tag);
    setData('name', tag.name);
    setShowModal(true);
  };

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    if (editingTag) {
      put(`/admin/tags/${editingTag.id}`, {
        onSuccess: () => {
          setShowModal(false);
          reset();
        },
      });
    } else {
      post('/admin/tags', {
        onSuccess: () => {
          setShowModal(false);
          reset();
        },
      });
    }
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this tag?')) {
      setDeleting(id);
      router.delete(`/admin/tags/${id}`, {
        onFinish: () => setDeleting(null),
      });
    }
  };

  const columns = [
    {
      key: 'name',
      label: 'Name',
      render: (tag: Tag) => (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
          {tag.name}
        </span>
      ),
    },
    {
      key: 'slug',
      label: 'Slug',
      render: (tag: Tag) => (
        <span className="text-gray-600">{tag.slug}</span>
      ),
    },
    {
      key: 'posts_count',
      label: 'Posts',
      render: (tag: Tag) => (
        <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">
          {tag.posts_count || 0}
        </span>
      ),
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (tag: Tag) => (
        <div className="flex items-center space-x-2">
          <button
            onClick={() => openEditModal(tag)}
            className="p-2 text-gray-600 hover:text-primary-600 rounded-lg hover:bg-gray-100"
            title="Edit"
          >
            <PencilIcon className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleDelete(tag.id)}
            disabled={deleting === tag.id}
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
    <AdminLayout title="Tags">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Tags</h2>
          <p className="text-gray-600">Manage blog post tags</p>
        </div>
        <Button onClick={openCreateModal}>
          <PlusIcon className="w-5 h-5 mr-2" />
          New Tag
        </Button>
      </div>

      <DataTable columns={columns} data={tags} />

      {/* Create/Edit Modal */}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        title={editingTag ? 'Edit Tag' : 'Create Tag'}
        maxWidth="sm"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Tag Name"
            value={data.name}
            onChange={(e) => setData('name', e.target.value)}
            error={errors.name}
            required
            placeholder="React"
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
              {editingTag ? 'Update' : 'Create'}
            </Button>
          </div>
        </form>
      </Modal>
    </AdminLayout>
  );
}
