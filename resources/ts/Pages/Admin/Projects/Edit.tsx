import AdminLayout from '@/Layouts/AdminLayout';
import Button from '@/Components/Common/Button';
import Input from '@/Components/Common/Input';
import Textarea from '@/Components/Common/Textarea';
import { useForm, router } from '@inertiajs/react';
import { FormEventHandler, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Project, Skill } from '@/types';

interface EditProjectProps {
  project: Project;
  skills: Skill[];
}

export default function EditProject({ project, skills }: EditProjectProps) {
  const { data, setData, post, processing, errors } = useForm({
    title: project.title,
    description: project.description,
    content: project.content,
    featured_image: null as File | null,
    demo_url: project.demo_url || '',
    github_url: project.github_url || '',
    status: project.status,
    created_at: project.created_at ? new Date(project.created_at).toISOString().split('T')[0] : '',
    skills: project.skills.map(s => s.id),
    _method: 'PUT',
  });

  const [previewImage, setPreviewImage] = useState<string | null>(
    project.featured_image ?  `/storage/${project.featured_image}` : null
  );

  const handleImageChange = (e: React. ChangeEvent<HTMLInputElement>) => {
    const file = e. target.files?.[0];
    if (file) {
      setData('featured_image', file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };


  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    post(`/admin/projects/${project.slug}`);
  };

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this project?')) {
      router.delete(`/admin/projects/${project.slug}`);
    }
  };

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image', 'video'],
      ['clean']
    ],
  };

  return (
    <AdminLayout title="Edit Project">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Edit Project</h2>
            <p className="text-gray-600">Update project information</p>
          </div>
          <Button variant="danger" onClick={handleDelete}>
            Delete Project
          </Button>
        </div>

        <form onSubmit={submit} className="bg-white rounded-lg shadow-md p-6 space-y-6">
          <Input
            label="Project Title"
            value={data.title}
            onChange={(e) => setData('title', e.target.value)}
            error={errors.title}
            required
          />

          <Textarea
            label="Short Description"
            value={data.description}
            onChange={(e) => setData('description', e.target.value)}
            error={errors.description}
            required
            rows={3}
          />

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Content <span className="text-red-500">*</span>
            </label>
            <div className={`bg-white ${errors.content ? 'border-red-500' : ''}`}>
              <ReactQuill
                theme="snow"
                value={data.content}
                onChange={(value) => setData('content', value)}
                modules={modules}
                className="h-64 mb-12"
              />
            </div>
            {errors.content && (
              <p className="mt-1 text-sm text-red-600">{errors.content}</p>
            )}
          </div>

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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Demo URL"
              type="url"
              value={data.demo_url}
              onChange={(e) => setData('demo_url', e.target.value)}
              error={errors.demo_url}
            />

            <Input
              label="GitHub URL"
              type="url"
              value={data.github_url}
              onChange={(e) => setData('github_url', e.target.value)}
              error={errors.github_url}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Created At */}
            <Input
              label="Created At"
              type="date"
              value={data.created_at || ''}
              onChange={(e) => setData('created_at', e.target.value)}
              error={errors.created_at}
              helperText="Optional: Override creation date"
            />

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
          </div>

          {/* Technologies/Skills */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Technologies Used
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 border border-gray-300 rounded-lg max-h-64 overflow-y-auto bg-gray-50">
              {skills.map(skill => (
                <label key={skill.id} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    value={skill.id}
                    checked={data.skills.includes(skill.id)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setData('skills', [...data.skills, skill.id]);
                      } else {
                        setData('skills', data.skills.filter(id => id !== skill.id));
                      }
                    }}
                    className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                </label>
              ))}
            </div>
            {errors.skills && (
              <p className="mt-1 text-sm text-red-600">{errors.skills}</p>
            )}
          </div>

          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="secondary"
              onClick={() => window.history.back()}
            >
              Cancel
            </Button>
            <Button type="submit" loading={processing}>
              Update Project
            </Button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
