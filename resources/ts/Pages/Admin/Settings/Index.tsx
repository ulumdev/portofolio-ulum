import AdminLayout from '@/Layouts/AdminLayout';
import Button from '@/Components/Common/Button';
import Input from '@/Components/Common/Input';
import Textarea from '@/Components/Common/Textarea';
import { useForm } from '@inertiajs/react';
import { FormEventHandler, useState } from 'react';

interface SettingsIndexProps {
  settings: {
    site_name: string;
    site_tagline: string;
    site_description: string;
    contact_email: string;
    github_url: string;
    linkedin_url: string;
    twitter_url: string;
    profile_photo: string;
  };
}

export default function SettingsIndex({ settings }: SettingsIndexProps) {
  const { data, setData, post, processing, errors } = useForm({
    site_name: settings.site_name || '',
    site_tagline: settings.site_tagline || '',
    site_description: settings. site_description || '',
    contact_email: settings.contact_email || '',
    github_url: settings.github_url || '',
    linkedin_url: settings.linkedin_url || '',
    twitter_url: settings.twitter_url || '',
    profile_photo: null as File | null,
    _method: 'PUT',
  });

  const [previewImage, setPreviewImage] = useState<string | null>(
    settings.profile_photo ?  `/storage/${settings.profile_photo}` : null
  );

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setData('profile_photo', file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    post('/admin/settings', {
      forceFormData: true,
      preserveScroll: true,
    });
  };

//   return (
//     <AdminLayout title="Settings">
//       <div className="max-w-4xl mx-auto">
//         <div className="mb-6">
//           <h2 className="text-2xl font-bold text-gray-900">Site Settings</h2>
//           <p className="text-gray-600">Configure your portfolio website</p>
//         </div>

//         <form onSubmit={submit} className="space-y-6">
//           {/* General Settings */}
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h3 className="text-lg font-semibold text-gray-900 mb-4">
//               General Information
//             </h3>
//             <div className="space-y-4">
//               <Input
//                 label="Site Name"
//                 value={data.site_name}
//                 onChange={(e) => setData('site_name', e.target.value)}
//                 error={errors.site_name}
//                 required
//                 placeholder="Portfolio Ulum"
//               />

//               <Input
//                 label="Site Tagline"
//                 value={data.site_tagline}
//                 onChange={(e) => setData('site_tagline', e.target.value)}
//                 error={errors.site_tagline}
//                 placeholder="Full Stack Developer & Designer"
//               />

//               <Textarea
//                 label="Site Description"
//                 value={data.site_description}
//                 onChange={(e) => setData('site_description', e.target.value)}
//                 error={errors.site_description}
//                 rows={4}
//                 placeholder="Brief description about you and your work..."
//                 helperText="Used for SEO and social media previews"
//               />

//               <Input
//                 label="Contact Email"
//                 type="email"
//                 value={data.contact_email}
//                 onChange={(e) => setData('contact_email', e.target.value)}
//                 error={errors.contact_email}
//                 placeholder="hello@example.com"
//               />
//             </div>
//           </div>

//           {/* Profile Photo */}
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h3 className="text-lg font-semibold text-gray-900 mb-4">
//               Profile Photo
//             </h3>
//             <div className="flex items-center space-x-6">
//               {previewImage ? (
//                 <img
//                   src={previewImage}
//                   alt="Profile"
//                   className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
//                 />
//               ) : (
//                 <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
//                   <span className="text-gray-400 text-4xl">? </span>
//                 </div>
//               )}
//               <div className="flex-1">
//                 <label className="block">
//                   <span className="sr-only">Choose profile photo</span>
//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={handleImageChange}
//                     className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
//                   />
//                 </label>
//                 <p className="mt-2 text-sm text-gray-500">
//                   JPG, PNG or GIF.  Max size 2MB.  Square images work best.
//                 </p>
//                 {errors.profile_photo && (
//                   <p className="mt-1 text-sm text-red-600">{errors.profile_photo}</p>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Social Media Links */}
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h3 className="text-lg font-semibold text-gray-900 mb-4">
//               Social Media Links
//             </h3>
//             <div className="space-y-4">
//               <Input
//                 label="GitHub URL"
//                 type="url"
//                 value={data.github_url}
//                 onChange={(e) => setData('github_url', e.target.value)}
//                 error={errors.github_url}
//                 placeholder="https://github.com/username"
//               />

//               <Input
//                 label="LinkedIn URL"
//                 type="url"
//                 value={data.linkedin_url}
//                 onChange={(e) => setData('linkedin_url', e.target.value)}
//                 error={errors.linkedin_url}
//                 placeholder="https://linkedin.com/in/username"
//               />

//               <Input
//                 label="Twitter URL"
//                 type="url"
//                 value={data.twitter_url}
//                 onChange={(e) => setData('twitter_url', e.target.value)}
//                 error={errors.twitter_url}
//                 placeholder="https://twitter.com/username"
//               />
//             </div>
//           </div>

//           {/* Save Button */}
//           <div className="flex justify-end">
//             <Button type="submit" loading={processing} size="lg">
//               Save Settings
//             </Button>
//           </div>
//         </form>
//       </div>
//     </AdminLayout>
//   );

    return (
    <AdminLayout title="Settings">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Site Settings</h2>
          <p className="text-gray-600">Configure your portfolio website</p>
        </div>

        <form onSubmit={submit} className="space-y-6">
          {/* General Settings */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              General Information
            </h3>
            <div className="space-y-4">
              <Input
                label="Site Name"
                value={data.site_name}
                onChange={(e) => setData('site_name', e.target.value)}
                error={errors.site_name}
                required
                placeholder="Portfolio Ulum"
              />

              <Input
                label="Site Tagline"
                value={data.site_tagline}
                onChange={(e) => setData('site_tagline', e.target.value)}
                error={errors.site_tagline}
                placeholder="Full Stack Developer & Designer"
              />

              <Textarea
                label="Site Description"
                value={data.site_description}
                onChange={(e) => setData('site_description', e.target.value)}
                error={errors.site_description}
                rows={4}
                placeholder="Brief description about you and your work..."
                helperText="Used for SEO and social media previews"
              />

              <Input
                label="Contact Email"
                type="email"
                value={data.contact_email}
                onChange={(e) => setData('contact_email', e.target.value)}
                error={errors.contact_email}
                placeholder="hello@example.com"
              />
            </div>
          </div>

          {/* Profile Photo */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Profile Photo
            </h3>
            <div className="flex items-center space-x-6">
              {previewImage ? (
                <img
                  src={previewImage}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
                />
              ) : (
                <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-4xl">👤</span>
                </div>
              )}
              <div className="flex-1">
                <label className="block">
                  <span className="sr-only">Choose profile photo</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
                  />
                </label>
                <p className="mt-2 text-sm text-gray-500">
                  JPG, PNG or GIF. Max size 2MB. Square images work best.
                </p>
                {errors.profile_photo && (
                  <p className="mt-1 text-sm text-red-600">{errors.profile_photo}</p>
                )}
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Social Media Links
            </h3>
            <div className="space-y-4">
              <Input
                label="GitHub URL"
                type="url"
                value={data.github_url}
                onChange={(e) => setData('github_url', e.target.value)}
                error={errors.github_url}
                placeholder="https://github.com/username"
              />

              <Input
                label="LinkedIn URL"
                type="url"
                value={data.linkedin_url}
                onChange={(e) => setData('linkedin_url', e.target.value)}
                error={errors.linkedin_url}
                placeholder="https://linkedin.com/in/username"
              />

              <Input
                label="Twitter URL"
                type="url"
                value={data.twitter_url}
                onChange={(e) => setData('twitter_url', e.target.value)}
                error={errors.twitter_url}
                placeholder="https://twitter.com/username"
              />
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <Button type="submit" loading={processing} size="lg">
              Save Settings
            </Button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
