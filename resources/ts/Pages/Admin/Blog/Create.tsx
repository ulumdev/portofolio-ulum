import AdminLayout from '@/Layouts/AdminLayout';
import Button from '@/Components/Common/Button';
import Input from '@/Components/Common/Input';
import Textarea from '@/Components/Common/Textarea';
import { useForm } from '@inertiajs/react';
import { FormEventHandler, useState } from 'react';
import { Category, Tag } from '@/types';

interface CreateBlogProps {
  categories: Category[];
  tags: Tag[];
}

export default function CreateBlog({ categories, tags }: CreateBlogProps) {
  const { data, setData, post, processing, errors } = useForm({
    title: '',
    excerpt: '',
    content: '',
    featured_image: null as File | null,
    category_id: '',
    tags: [] as number[],
    status: 'draft' as 'draft' | 'published',
    published_at: '',
  });

  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setData('featured_image', file);
      const reader = new FileReader();
      reader. onloadend = () => {
        setPreviewImage(reader. result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTagToggle = (tagId: number) => {
    if (data.tags.includes(tagId)) {
      setData('tags', data.tags.filter((id) => id !== tagId));
    } else {
      setData('tags', [...data.tags, tagId]);
    }
  };

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    post('/admin/blog');
  };

  return (
    <AdminLayout title="Create Blog Post">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Create New Blog Post</h2>
          <p className="text-gray-600">Write a new article for your blog</p>
        </div>

        <form onSubmit={submit} className="bg-white rounded-lg shadow-md p-6 space-y-6">
          {/* Title */}
          <Input
            label="Post Title"
            value={data.title}
            onChange={(e) => setData('title', e.target.value)}
            error={errors.title}
            required
            placeholder="How to Build Amazing Things..."
          />

          {/* Excerpt */}
          <Textarea
            label="Excerpt"
            value={data. excerpt}
            onChange={(e) => setData('excerpt', e. target.value)}
            error={errors.excerpt}
            required
            rows={3}
            placeholder="Brief summary of your post..."
            helperText="Short description that appears in post listings"
          />

          {/* Content */}
          <Textarea
            label="Content"
            value={data.content}
            onChange={(e) => setData('content', e.target.value)}
            error={errors.content}
            required
            rows={15}
            placeholder="Write your post content here..."
            helperText="Supports Markdown formatting"
          />

          {/* Featured Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Featured Image
            </label>
            {previewImage && (
              <div className="mb-4">
                <img
                  src={previewImage}
                  alt="Preview"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
            />
            {errors.featured_image && (
              <p className="mt-1 text-sm text-red-600">{errors.featured_image}</p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category <span className="text-red-500">*</span>
            </label>
            <select
              value={data.category_id}
              onChange={(e) => setData('category_id', e. target.value)}
              className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              required
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            {errors.category_id && (
              <p className="mt-1 text-sm text-red-600">{errors.category_id}</p>
            )}
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tags
            </label>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag.id}
                  type="button"
                  onClick={() => handleTagToggle(tag. id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    data.tags.includes(tag.id)
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tag.name}
                </button>
              ))}
            </div>
            {errors. tags && (
              <p className="mt-1 text-sm text-red-600">{errors.tags}</p>
            )}
          </div>

          {/* Status & Published Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="draft"
                    checked={data.status === 'draft'}
                    onChange={(e) => setData('status', e.target.value as 'draft')}
                    className="mr-2"
                  />
                  <span>Draft</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="published"
                    checked={data.status === 'published'}
                    onChange={(e) => setData('status', e.target.value as 'published')}
                    className="mr-2"
                  />
                  <span>Published</span>
                </label>
              </div>
            </div>

            <Input
              label="Publish Date"
              type="datetime-local"
              value={data.published_at}
              onChange={(e) => setData('published_at', e.target.value)}
              error={errors.published_at}
              helperText="Leave empty to publish immediately"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="secondary"
              onClick={() => window.history.back()}
            >
              Cancel
            </Button>
            <Button type="submit" loading={processing}>
              Create Post
            </Button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
