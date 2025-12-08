import AdminLayout from '@/Layouts/AdminLayout';
import Button from '@/Components/Common/Button';
import Input from '@/Components/Common/Input';
import Textarea from '@/Components/Common/Textarea';
import { useForm } from '@inertiajs/react';
import { FormEventHandler, useState } from 'react';
import { Skill } from '@/types';

interface CreateProjectProps {
  skills: Skill[];
}

export default function CreateProject({ skills }: CreateProjectProps) {
  const { data, setData, post, processing, errors } = useForm({
    title: '',
    description: '',
    content: '',
    featured_image: null as File | null,
    demo_url: '',
    github_url: '',
    status: 'draft' as 'draft' | 'published',
    skills: [] as number[],
  });

  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setData('featured_image', file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSkillToggle = (skillId: number) => {
    if (data.skills.includes(skillId)) {
      setData('skills', data.skills.filter((id) => id !== skillId));
    } else {
      setData('skills', [...data.skills, skillId]);
    }
  };

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    post('/admin/projects');
  };

  return (
    <AdminLayout title="Create Project">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Create New Project</h2>
          <p className="text-gray-600">Add a new project to your portfolio</p>
        </div>

        <form onSubmit={submit} className="bg-white rounded-lg shadow-md p-6 space-y-6">
          {/* Title */}
          <Input
            label="Project Title"
            value={data.title}
            onChange={(e) => setData('title', e.target.value)}
            error={errors.title}
            required
            placeholder="My Awesome Project"
          />

          {/* Description */}
          <Textarea
            label="Short Description"
            value={data. description}
            onChange={(e) => setData('description', e. target.value)}
            error={errors.description}
            required
            rows={3}
            placeholder="Brief overview of the project..."
          />

          {/* Content */}
          <Textarea
            label="Full Content"
            value={data.content}
            onChange={(e) => setData('content', e.target. value)}
            error={errors. content}
            required
            rows={8}
            placeholder="Detailed description of the project..."
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

          {/* URLs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Demo URL"
              type="url"
              value={data.demo_url}
              onChange={(e) => setData('demo_url', e.target.value)}
              error={errors.demo_url}
              placeholder="https://demo.example.com"
            />

            <Input
              label="GitHub URL"
              type="url"
              value={data.github_url}
              onChange={(e) => setData('github_url', e.target.value)}
              error={errors.github_url}
              placeholder="https://github. com/username/repo"
            />
          </div>

          {/* Technologies/Skills */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Technologies Used
            </label>
            <div className="flex flex-wrap gap-2">
              {skills. map((skill) => (
                <button
                  key={skill.id}
                  type="button"
                  onClick={() => handleSkillToggle(skill.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    data.skills.includes(skill.id)
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {skill.name}
                </button>
              ))}
            </div>
            {errors.skills && (
              <p className="mt-1 text-sm text-red-600">{errors.skills}</p>
            )}
          </div>

          {/* Status */}
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
              Create Project
            </Button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
