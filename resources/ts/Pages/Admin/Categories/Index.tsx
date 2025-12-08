import AdminLayout from '@/Layouts/AdminLayout';
import DataTable from '@/Components/Admin/DataTable';
import Button from '@/Components/Common/Button';
import Modal from '@/Components/Common/Modal';
import Input from '@/Components/Common/Input';
import Textarea from '@/Components/Common/Textarea';
import { useForm, router } from '@inertiajs/react';
import { PencilIcon, TrashIcon, PlusIcon } from '@heroicons/react/24/outline';
import { Category } from '@/types';
import { FormEventHandler, useState } from 'react';

interface CategoriesIndexProps {
  categories: Category[];
}

export default function CategoriesIndex({ categories }: CategoriesIndexProps) {
  const [showModal, setShowModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [deleting, setDeleting] = useState<number | null>(null);

  const { data, setData, post, put, processing, errors, reset } = useForm({
    name: '',
    description: '',
  });

  const openCreateModal = () => {
    reset();
    setEditingCategory(null);
    setShowModal(true);
  };

  const openEditModal = (category: Category) => {
    setEditingCategory(category);
    setData({
      name: category.name,
      description: category.description || '',
    });
    setShowModal(true);
  };

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    if (editingCategory) {
      put(`/admin/categories/${editingCategory.id}`, {
        onSuccess: () => {
          setShowModal(false);
          reset();
        },
      });
    } else {
      post('/admin/categories', {
        onSuccess: () => {
          setShowModal(false);
          reset();
        },
      });
    }
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this category?')) {
      setDeleting(id);
      router.delete(`/admin/categories/${id}`, {
        onFinish: () => setDeleting(null),
      });
    }
  };

  const columns = [
    {
      key: 'name',
      label: 'Name',
      render: (category: Category) => (
        <span className="font-medium text-gray-900">{category. name}</span>
      ),
    },
    {
      key: 'slug',
      label: 'Slug',
      render: (category: Category) => (
        <span className="text-gray-600">{category.slug}</span>
      ),
    },
    {
      key: 'description',
      label: 'Description',
      render: (category: Category) => (
        <span className="text-gray-600">
          {category.description || '—'}
        </span>
      ),
    },
    {
      key: 'blog_posts_count',
      label: 'Posts',
      render: (category: Category) => (
        <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">
          {category.blog_posts_count || 0}
        </span>
      ),
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (category: Category) => (
        <div className="flex items-center space-x-2">
          <button
            onClick={() => openEditModal(category)}
            className="p-2 text-gray-600 hover:text-primary-600 rounded-lg hover:bg-gray-100"
            title="Edit"
          >
            <PencilIcon className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleDelete(category.id)}
            disabled={deleting === category.id}
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
    <AdminLayout title="Categories">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Categories</h2>
          <p className="text-gray-600">Organize your blog posts</p>
        </div>
        <Button onClick={openCreateModal}>
          <PlusIcon className="w-5 h-5 mr-2" />
          New Category
        </Button>
      </div>

      <DataTable columns={columns} data={categories} />

      {/* Create/Edit Modal */}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        title={editingCategory ? 'Edit Category' : 'Create Category'}
        maxWidth="md"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Category Name"
            value={data. name}
            onChange={(e) => setData('name', e. target.value)}
            error={errors.name}
            required
            placeholder="Technology"
          />

          <Textarea
            label="Description"
            value={data. description}
            onChange={(e) => setData('description', e. target.value)}
            error={errors.description}
            rows={3}
            placeholder="Brief description of this category..."
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
              {editingCategory ? 'Update' : 'Create'}
            </Button>
          </div>
        </form>
      </Modal>
    </AdminLayout>
  );
}
