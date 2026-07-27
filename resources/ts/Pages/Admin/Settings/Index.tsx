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
    email: string;
    github_url: string;
    linkedin_url: string;
    twitter_url: string;
    instagram_url: string;
    profile_photo: string;
    phone: string;
    address: string;
    privacy_policy_url: string;
    terms_of_service_url: string;
        cv_file: string;
    home_hero_title: string;
    home_hero_gradient: string;
    home_hero_subtitle: string;
    about_hero_title: string;
    about_hire_status: string;
    portfolio_hero_title: string;
    portfolio_hero_gradient: string;
    portfolio_hero_subtitle: string;
    blog_hero_title: string;
    blog_hero_gradient: string;
    blog_hero_subtitle: string;
    contact_hero_title: string;
    contact_hero_gradient: string;
    contact_hero_subtitle: string;
    contact_freelance_status: string;
  };
}

export default function SettingsIndex({ settings }: SettingsIndexProps) {
  const { data, setData, post, processing, errors } = useForm({
    site_name: settings.site_name || '',
    site_tagline: settings.site_tagline || '',
    site_description: settings. site_description || '',
    email: settings.email || '',
    github_url: settings.github_url || '',
    linkedin_url: settings.linkedin_url || '',
    twitter_url: settings.twitter_url || '',
    instagram_url: settings.instagram_url || '',
    profile_photo: null as File | null,
    phone: settings.phone || '',
    address: settings.address || '',
    privacy_policy_url: settings.privacy_policy_url || '',
    terms_of_service_url: settings.terms_of_service_url || '',
        cv_file: null as File | null,
    home_hero_title: settings.home_hero_title || '',
    home_hero_gradient: settings.home_hero_gradient || '',
    home_hero_subtitle: settings.home_hero_subtitle || '',
    about_hero_title: settings.about_hero_title || '',
    about_hire_status: settings.about_hire_status || '',
    portfolio_hero_title: settings.portfolio_hero_title || '',
    portfolio_hero_gradient: settings.portfolio_hero_gradient || '',
    portfolio_hero_subtitle: settings.portfolio_hero_subtitle || '',
    blog_hero_title: settings.blog_hero_title || '',
    blog_hero_gradient: settings.blog_hero_gradient || '',
    blog_hero_subtitle: settings.blog_hero_subtitle || '',
    contact_hero_title: settings.contact_hero_title || '',
    contact_hero_gradient: settings.contact_hero_gradient || '',
    contact_hero_subtitle: settings.contact_hero_subtitle || '',
    contact_freelance_status: settings.contact_freelance_status || '',
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

  const [cvFileName, setCvFileName] = useState<string | null>(
    settings.cv_file ? settings.cv_file.split('/').pop() || null : null
  );

  const handleCvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setData('cv_file', file);
      setCvFileName(file.name);
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
//                 value={data.email}
//                 onChange={(e) => setData('email', e.target.value)}
//                 error={errors.email}
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

//                     {/* Hero Sections Settings */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Hero Sections & Text Copies
            </h3>
            <div className="space-y-6">
              <div className="border-b pb-4">
                <h4 className="text-md font-medium text-gray-800 mb-3">Home Page</h4>
                <div className="space-y-4">
                  <Input label="Hero Title" value={data.home_hero_title} onChange={e => setData('home_hero_title', e.target.value)} error={errors.home_hero_title} />
                  <Input label="Hero Gradient Word" value={data.home_hero_gradient} onChange={e => setData('home_hero_gradient', e.target.value)} error={errors.home_hero_gradient} />
                  <Textarea label="Hero Subtitle" value={data.home_hero_subtitle} onChange={e => setData('home_hero_subtitle', e.target.value)} error={errors.home_hero_subtitle} rows={3} />
                </div>
              </div>
              <div className="border-b pb-4">
                <h4 className="text-md font-medium text-gray-800 mb-3">About Page</h4>
                <div className="space-y-4">
                  <Input label="Hero Title" value={data.about_hero_title} onChange={e => setData('about_hero_title', e.target.value)} error={errors.about_hero_title} />
                  <Input label="Hire Status Badge" value={data.about_hire_status} onChange={e => setData('about_hire_status', e.target.value)} error={errors.about_hire_status} />
                </div>
              </div>
              <div className="border-b pb-4">
                <h4 className="text-md font-medium text-gray-800 mb-3">Portofolio Page</h4>
                <div className="space-y-4">
                  <Input label="Hero Title" value={data.portfolio_hero_title} onChange={e => setData('portfolio_hero_title', e.target.value)} error={errors.portfolio_hero_title} />
                  <Input label="Hero Gradient Word" value={data.portfolio_hero_gradient} onChange={e => setData('portfolio_hero_gradient', e.target.value)} error={errors.portfolio_hero_gradient} />
                  <Textarea label="Hero Subtitle" value={data.portfolio_hero_subtitle} onChange={e => setData('portfolio_hero_subtitle', e.target.value)} error={errors.portfolio_hero_subtitle} rows={3} />
                </div>
              </div>
              <div className="border-b pb-4">
                <h4 className="text-md font-medium text-gray-800 mb-3">Blog Page</h4>
                <div className="space-y-4">
                  <Input label="Hero Title" value={data.blog_hero_title} onChange={e => setData('blog_hero_title', e.target.value)} error={errors.blog_hero_title} />
                  <Input label="Hero Gradient Word" value={data.blog_hero_gradient} onChange={e => setData('blog_hero_gradient', e.target.value)} error={errors.blog_hero_gradient} />
                  <Textarea label="Hero Subtitle" value={data.blog_hero_subtitle} onChange={e => setData('blog_hero_subtitle', e.target.value)} error={errors.blog_hero_subtitle} rows={3} />
                </div>
              </div>
              <div className="pt-2">
                <h4 className="text-md font-medium text-gray-800 mb-3">Contact Page</h4>
                <div className="space-y-4">
                  <Input label="Hero Title" value={data.contact_hero_title} onChange={e => setData('contact_hero_title', e.target.value)} error={errors.contact_hero_title} />
                  <Input label="Hero Gradient Word" value={data.contact_hero_gradient} onChange={e => setData('contact_hero_gradient', e.target.value)} error={errors.contact_hero_gradient} />
                  <Textarea label="Hero Subtitle" value={data.contact_hero_subtitle} onChange={e => setData('contact_hero_subtitle', e.target.value)} error={errors.contact_hero_subtitle} rows={3} />
                  <Input label="Freelance Status" value={data.contact_freelance_status} onChange={e => setData('contact_freelance_status', e.target.value)} error={errors.contact_freelance_status} />
                </div>
              </div>
            </div>
          </div>
          {/* Save Button */}
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
                value={data.email}
                onChange={(e) => setData('email', e.target.value)}
                error={errors.email}
                placeholder="hello@example.com"
              />

              <Input
                label="Phone Number"
                type="text"
                value={data.phone}
                onChange={(e) => setData('phone', e.target.value)}
                error={errors.phone}
                placeholder="+62 812 3456 7890"
              />

              <Input
                label="Address"
                type="text"
                value={data.address}
                onChange={(e) => setData('address', e.target.value)}
                error={errors.address}
                placeholder="Mojokerto, Indonesia"
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

          {/* CV Upload */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Curriculum Vitae (CV)
            </h3>
            <div className="flex items-center space-x-6">
              <div className="flex-1">
                <label className="block">
                  <span className="sr-only">Choose CV file</span>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleCvChange}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
                  />
                </label>
                <p className="mt-2 text-sm text-gray-500">
                  PDF format only. Max size 5MB.
                </p>
                {cvFileName && (
                  <p className="mt-1 text-sm text-green-600">Current file: {cvFileName}</p>
                )}
                {errors.cv_file && (
                  <p className="mt-1 text-sm text-red-600">{errors.cv_file}</p>
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
              <Input
                label="Instagram URL"
                type="url"
                value={data.instagram_url}
                onChange={(e) => setData('instagram_url', e.target.value)}
                error={errors.instagram_url}
                placeholder="https://instagram.com/username"
              />
            </div>
          </div>

          {/* Legal Links */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Legal Links
            </h3>
            <div className="space-y-4">
              <Input
                label="Privacy Policy URL"
                type="text"
                value={data.privacy_policy_url}
                onChange={(e) => setData('privacy_policy_url', e.target.value)}
                error={errors.privacy_policy_url}
                placeholder="/privacy-policy"
              />

              <Input
                label="Terms of Service URL"
                type="text"
                value={data.terms_of_service_url}
                onChange={(e) => setData('terms_of_service_url', e.target.value)}
                error={errors.terms_of_service_url}
                placeholder="/terms-of-service"
              />
            </div>
          </div>

                    {/* Hero Sections Settings */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Hero Sections & Text Copies
            </h3>
            <div className="space-y-6">
              <div className="border-b pb-4">
                <h4 className="text-md font-medium text-gray-800 mb-3">Home Page</h4>
                <div className="space-y-4">
                  <Input label="Hero Title" value={data.home_hero_title} onChange={e => setData('home_hero_title', e.target.value)} error={errors.home_hero_title} />
                  <Input label="Hero Gradient Word" value={data.home_hero_gradient} onChange={e => setData('home_hero_gradient', e.target.value)} error={errors.home_hero_gradient} />
                  <Textarea label="Hero Subtitle" value={data.home_hero_subtitle} onChange={e => setData('home_hero_subtitle', e.target.value)} error={errors.home_hero_subtitle} rows={3} />
                </div>
              </div>
              <div className="border-b pb-4">
                <h4 className="text-md font-medium text-gray-800 mb-3">About Page</h4>
                <div className="space-y-4">
                  <Input label="Hero Title" value={data.about_hero_title} onChange={e => setData('about_hero_title', e.target.value)} error={errors.about_hero_title} />
                  <Input label="Hire Status Badge" value={data.about_hire_status} onChange={e => setData('about_hire_status', e.target.value)} error={errors.about_hire_status} />
                </div>
              </div>
              <div className="border-b pb-4">
                <h4 className="text-md font-medium text-gray-800 mb-3">Portofolio Page</h4>
                <div className="space-y-4">
                  <Input label="Hero Title" value={data.portfolio_hero_title} onChange={e => setData('portfolio_hero_title', e.target.value)} error={errors.portfolio_hero_title} />
                  <Input label="Hero Gradient Word" value={data.portfolio_hero_gradient} onChange={e => setData('portfolio_hero_gradient', e.target.value)} error={errors.portfolio_hero_gradient} />
                  <Textarea label="Hero Subtitle" value={data.portfolio_hero_subtitle} onChange={e => setData('portfolio_hero_subtitle', e.target.value)} error={errors.portfolio_hero_subtitle} rows={3} />
                </div>
              </div>
              <div className="border-b pb-4">
                <h4 className="text-md font-medium text-gray-800 mb-3">Blog Page</h4>
                <div className="space-y-4">
                  <Input label="Hero Title" value={data.blog_hero_title} onChange={e => setData('blog_hero_title', e.target.value)} error={errors.blog_hero_title} />
                  <Input label="Hero Gradient Word" value={data.blog_hero_gradient} onChange={e => setData('blog_hero_gradient', e.target.value)} error={errors.blog_hero_gradient} />
                  <Textarea label="Hero Subtitle" value={data.blog_hero_subtitle} onChange={e => setData('blog_hero_subtitle', e.target.value)} error={errors.blog_hero_subtitle} rows={3} />
                </div>
              </div>
              <div className="pt-2">
                <h4 className="text-md font-medium text-gray-800 mb-3">Contact Page</h4>
                <div className="space-y-4">
                  <Input label="Hero Title" value={data.contact_hero_title} onChange={e => setData('contact_hero_title', e.target.value)} error={errors.contact_hero_title} />
                  <Input label="Hero Gradient Word" value={data.contact_hero_gradient} onChange={e => setData('contact_hero_gradient', e.target.value)} error={errors.contact_hero_gradient} />
                  <Textarea label="Hero Subtitle" value={data.contact_hero_subtitle} onChange={e => setData('contact_hero_subtitle', e.target.value)} error={errors.contact_hero_subtitle} rows={3} />
                  <Input label="Freelance Status" value={data.contact_freelance_status} onChange={e => setData('contact_freelance_status', e.target.value)} error={errors.contact_freelance_status} />
                </div>
              </div>
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
