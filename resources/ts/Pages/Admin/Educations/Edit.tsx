import AdminLayout from '@/Layouts/AdminLayout';
import Button from '@/Components/Common/Button';
import Input from '@/Components/Common/Input';
import { useForm, router } from '@inertiajs/react';
import { FormEventHandler, useState } from 'react';
import { Education } from '@/types';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface EditEducationProps {
  education: Education;
}

const formatDateForInput = (dateString: string | null | undefined): string => {
  if (!dateString) return '';
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export default function EditEducation({ education }: EditEducationProps) {
  const { data, setData, post, processing, errors } = useForm({
    institution: education.institution,
    degree: education.degree,
    field_of_study: education.field_of_study || '',
    location: education.location || '',
    start_date: formatDateForInput(education.start_date),
    end_date: formatDateForInput(education.end_date ?? null),
    is_current: education.is_current,
    grade: education.grade || '',
    activities: education.activities || '',
    description: education.description || '',
    institution_logo: null as File | null,
    order: education.order,
    _method: 'PUT',
  });

  const [previewLogo, setPreviewLogo] = useState<string | null>(
    education.institution_logo ? `/storage/${education.institution_logo}` : null
  );

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setData('institution_logo', file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewLogo(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    post(`/admin/educations/${education.id}`);
  };

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this education?')) {
      router.delete(`/admin/educations/${education.id}`);
    }
  };

  return (
    <AdminLayout title="Edit Education">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Edit Education</h2>
            <p className="text-gray-600">Update educational background</p>
          </div>
          <Button variant="danger" onClick={handleDelete}>
            Delete Education
          </Button>
        </div>

        <form onSubmit={submit} className="bg-white rounded-lg shadow-md p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Institution"
              value={data.institution}
              onChange={(e) => setData('institution', e.target.value)}
              error={errors.institution}
              required
              placeholder="University of Technology"
            />

            <Input
              label="Degree"
              value={data.degree}
              onChange={(e) => setData('degree', e.target.value)}
              error={errors.degree}
              required
              placeholder="Bachelor of Science"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Field of Study"
              value={data.field_of_study}
              onChange={(e) => setData('field_of_study', e.target.value)}
              error={errors.field_of_study}
              placeholder="Computer Science"
            />

            <Input
              label="Location"
              value={data.location}
              onChange={(e) => setData('location', e.target.value)}
              error={errors.location}
              placeholder="City, Country"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Start Date"
              type="date"
              value={data.start_date}
              onChange={(e) => setData('start_date', e.target.value)}
              error={errors.start_date}
              required
            />

            <Input
              label="End Date"
              type="date"
              value={data.end_date}
              onChange={(e) => setData('end_date', e.target.value)}
              error={errors.end_date}
              disabled={data.is_current}
              helperText={data.is_current ? 'Currently studying here' : ''}
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              checked={data.is_current}
              onChange={(e) => {
                setData('is_current', e.target.checked);
                if (e.target.checked) {
                  setData('end_date', '');
                }
              }}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label className="ml-2 text-sm text-gray-700">
              I currently study here
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Grade / GPA"
              value={data.grade}
              onChange={(e) => setData('grade', e.target.value)}
              error={errors.grade}
              placeholder="3.8/4.0"
            />
            <Input
              label="Display Order"
              type="number"
              value={data.order}
              onChange={(e) => setData('order', parseInt(e.target.value))}
              error={errors.order}
              helperText="Lower numbers appear first"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Activities & Societies
            </label>
            <ReactQuill
              value={data.activities}
              onChange={(val) => setData('activities', val)}
              className="bg-white rounded-lg"
              theme="snow"
            />
            {errors.activities && (
              <p className="mt-1 text-sm text-red-600">{errors.activities}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <ReactQuill
              value={data.description}
              onChange={(val) => setData('description', val)}
              className="bg-white rounded-lg"
              theme="snow"
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-600">{errors.description}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Institution Logo
            </label>
            {previewLogo && (
              <div className="mb-4">
                <img
                  src={previewLogo}
                  alt="Preview"
                  className="w-24 h-24 rounded-lg object-cover border border-gray-200 p-1"
                />
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleLogoChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            />
            {errors.institution_logo && (
              <p className="mt-1 text-sm text-red-600">{errors.institution_logo}</p>
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
              Update Education
            </Button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
