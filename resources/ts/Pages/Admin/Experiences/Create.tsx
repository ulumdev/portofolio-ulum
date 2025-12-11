import AdminLayout from '@/Layouts/AdminLayout';
import Button from '@/Components/Common/Button';
import Input from '@/Components/Common/Input';
import Textarea from '@/Components/Common/Textarea';
import { useForm } from '@inertiajs/react';
import { FormEventHandler, useState } from 'react';

export default function CreateExperience() {
  const { data, setData, post, processing, errors } = useForm({
    position: '',
    company:  '',
    company_url: '',
    location: '',
    employment_type: 'full-time' as 'full-time' | 'part-time' | 'contract' | 'freelance' | 'internship',
    start_date: '',
    end_date: '',
    is_current: false,
    description: '',
    responsibilities: [''],
    technologies: [''],
    company_logo: null as File | null,
    order:  0,
    is_featured:  false,
  });

  const [previewLogo, setPreviewLogo] = useState<string | null>(null);

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setData('company_logo', file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewLogo(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const addResponsibility = () => {
    setData('responsibilities', [...data.responsibilities, '']);
  };

  const removeResponsibility = (index:  number) => {
    setData('responsibilities', data.responsibilities.filter((_, i) => i !== index));
  };

  const updateResponsibility = (index: number, value: string) => {
    const updated = [...data.responsibilities];
    updated[index] = value;
    setData('responsibilities', updated);
  };

  const addTechnology = () => {
    setData('technologies', [...data.technologies, '']);
  };

  const removeTechnology = (index: number) => {
    setData('technologies', data.technologies.filter((_, i) => i !== index));
  };

  const updateTechnology = (index: number, value: string) => {
    const updated = [...data.technologies];
    updated[index] = value;
    setData('technologies', updated);
  };

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    // Filter out empty responsibilities and technologies
    const filteredResponsibilities = data.responsibilities.filter(r => r.trim() !== '');
    const filteredTechnologies = data.technologies.filter(t => t.trim() !== '');

    // Update form data with filtered values
    setData({
      ...data,
      responsibilities: filteredResponsibilities,
      technologies: filteredTechnologies,
    });

    post('/admin/experiences');
  };

  return (
    <AdminLayout title="Create Experience">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Add New Experience</h2>
          <p className="text-gray-600">Add your work history and professional experience</p>
        </div>

        <form onSubmit={submit} className="bg-white rounded-lg shadow-md p-6 space-y-6">
          {/* Position & Company */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Position/Role"
              value={data.position}
              onChange={(e) => setData('position', e.target.value)}
              error={errors.position}
              required
              placeholder="Software Engineer"
            />

            <Input
              label="Company Name"
              value={data.company}
              onChange={(e) => setData('company', e.target.value)}
              error={errors.company}
              required
              placeholder="Tech Company Inc."
            />
          </div>

          {/* Company URL & Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Company Website"
              type="url"
              value={data.company_url}
              onChange={(e) => setData('company_url', e.target.value)}
              error={errors.company_url}
              placeholder="https://company.com"
            />

            <Input
              label="Location"
              value={data.location}
              onChange={(e) => setData('location', e.target.value)}
              error={errors.location}
              placeholder="Remote / City, Country"
            />
          </div>

          {/* Employment Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Employment Type <span className="text-red-500">*</span>
            </label>
            <select
              value={data.employment_type}
              onChange={(e) => setData('employment_type', e.target.value as any)}
              className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              required
            >
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="contract">Contract</option>
              <option value="freelance">Freelance</option>
              <option value="internship">Internship</option>
            </select>
            {errors.employment_type && (
              <p className="mt-1 text-sm text-red-600">{errors.employment_type}</p>
            )}
          </div>

          {/* Date Range */}
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
              helperText={data.is_current ? 'Currently working here' : ''}
            />
          </div>

          {/* Current Position Checkbox */}
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
              className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
            />
            <label className="ml-2 text-sm text-gray-700">
              I currently work here
            </label>
          </div>

          {/* Description */}
          <Textarea
            label="Job Description"
            value={data.description}
            onChange={(e) => setData('description', e.target.value)}
            error={errors.description}
            required
            rows={4}
            placeholder="Brief overview of your role..."
          />

          {/* Responsibilities */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Key Responsibilities
            </label>
            <div className="space-y-3">
              {data.responsibilities.map((responsibility, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={responsibility}
                    onChange={(e) => updateResponsibility(index, e.target.value)}
                    placeholder="Enter a responsibility..."
                    className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                  {data.responsibilities.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeResponsibility(index)}
                      className="px-3 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={addResponsibility}
              className="mt-3 text-sm text-primary-600 hover:text-primary-800 font-medium"
            >
              + Add Responsibility
            </button>
          </div>

          {/* Technologies */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Technologies Used
            </label>
            <div className="space-y-3">
              {data.technologies.map((tech, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={tech}
                    onChange={(e) => updateTechnology(index, e.target.value)}
                    placeholder="e.g., React, Laravel, MySQL"
                    className="flex-1 rounded-lg border-gray-300 shadow-sm focus: border-primary-500 focus: ring-primary-500"
                  />
                  {data.technologies.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeTechnology(index)}
                      className="px-3 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={addTechnology}
              className="mt-3 text-sm text-primary-600 hover:text-primary-800 font-medium"
            >
              + Add Technology
            </button>
          </div>

          {/* Company Logo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Logo
            </label>
            {previewLogo && (
              <div className="mb-4">
                <img
                  src={previewLogo}
                  alt="Preview"
                  className="w-24 h-24 rounded-lg object-cover"
                />
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleLogoChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
            />
            {errors.company_logo && (
              <p className="mt-1 text-sm text-red-600">{errors.company_logo}</p>
            )}
          </div>

          {/* Additional Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Display Order"
              type="number"
              value={data.order}
              onChange={(e) => setData('order', parseInt(e.target.value))}
              error={errors.order}
              helperText="Lower numbers appear first"
            />

            <div className="flex items-center space-x-6 pt-8">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={data.is_featured}
                  onChange={(e) => setData('is_featured', e.target.checked)}
                  className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                <span className="ml-2 text-sm text-gray-700">Featured Experience</span>
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
              Create Experience
            </Button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
