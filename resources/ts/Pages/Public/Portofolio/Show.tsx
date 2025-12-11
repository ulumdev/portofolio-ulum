// import PublicLayout from '@/Layouts/PublicLayout';
// import { Link } from '@inertiajs/react';
// import { ArrowLeftIcon, GlobeAltIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
// import { Project } from '@/types';

// interface PortofolioShowProps {
//   project: Project;
// }

// export default function PortofolioShow({ project }: PortofolioShowProps) {
//   return (
//     <PublicLayout title={project.title}>
//       {/* Header */}
//       <section className="bg-gray-900 text-white py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <Link
//             href="/portofolio"
//             className="inline-flex items-center text-primary-300 hover:text-primary-200 mb-6"
//           >
//             <ArrowLeftIcon className="w-5 h-5 mr-2" />
//             Back to Portofolio
//           </Link>
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
//           <p className="text-xl text-gray-300">{project.description}</p>
//         </div>
//       </section>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Main Content */}
//           <div className="lg:col-span-2">
//             {/* Featured Image */}
//             {project.featured_image && (
//               <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
//                 <img
//                   src={`/storage/${project.featured_image}`}
//                   alt={project.title}
//                   className="w-full h-auto"
//                 />
//               </div>
//             )}

//             {/* Content */}
//             <div className="prose max-w-none">
//               <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
//                 {project.content}
//               </div>
//             </div>
//           </div>

//           {/* Sidebar */}
//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-lg shadow-md p-6 sticky top-6 space-y-6">
//               {/* Technologies */}
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-3">
//                   Technologies Used
//                 </h3>
//                 <div className="flex flex-wrap gap-2">
//                   {project.skills.map((skill) => (
//                     <span
//                       key={skill.id}
//                       className="px-3 py-2 text-sm font-medium bg-primary-100 text-primary-800 rounded-lg"
//                     >
//                       {skill.name}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* Links */}
//               {(project.demo_url || project.github_url) && (
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900 mb-3">
//                     Project Links
//                   </h3>
//                   <div className="space-y-2">
//                     {project.demo_url && (
//                       <a
//                         href={project.demo_url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center w-full px-4 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
//                       >
//                         <GlobeAltIcon className="w-5 h-5 mr-2" />
//                         View Live Demo
//                       </a>
//                     )}
//                     {project.github_url && (
//                       <a
//                         href={project.github_url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center w-full px-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
//                       >
//                         <CodeBracketIcon className="w-5 h-5 mr-2" />
//                         View Source Code
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               )}

//               {/* Project Info */}
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-3">
//                   Project Info
//                 </h3>
//                 <dl className="space-y-2 text-sm">
//                   <div>
//                     <dt className="text-gray-500">Status</dt>
//                     <dd className="font-medium text-gray-900 capitalize">
//                       {project.status}
//                     </dd>
//                   </div>
//                   <div>
//                     <dt className="text-gray-500">Created</dt>
//                     <dd className="font-medium text-gray-900">
//                       {new Date(project.created_at). toLocaleDateString('en-US', {
//                         year: 'numeric',
//                         month: 'long',
//                       })}
//                     </dd>
//                   </div>
//                 </dl>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </PublicLayout>
//   );
// }


import PublicLayout from '@/Layouts/PublicLayout';
import { Link } from '@inertiajs/react';
import {
  ArrowLeftIcon,
  GlobeAltIcon,
  CodeBracketIcon,
  CalendarIcon,
  TagIcon
} from '@heroicons/react/24/outline';
import { Project } from '@/types';

interface PortofolioShowProps {
  project: Project;
}

export default function PortofolioShow({ project }: PortofolioShowProps) {
  return (
    <PublicLayout title={project.title}>
      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid. svg')] opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <Link
            href="/portofolio"
            className="inline-flex items-center text-white/80 hover:text-white mb-8 group transition-colors animate-fade-in-up"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Portofolio
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                  {project.status === 'published' ? '✨ Live Project' : '🚧 In Development'}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Project Image Preview */}
            {project.featured_image && (
              <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 transform hover:scale-105 transition-transform duration-500">
                  <img
                    src={`/storage/${project.featured_image}`}
                    alt={project.title}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Full Image */}
            {project.featured_image && (
              <div className="animate-fade-in-up">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-800">
                  <img
                    src={`/storage/${project.featured_image}`}
                    alt={project.title}
                    className="w-full h-auto hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            )}

            {/* Project Description */}
            <div className="animate-fade-in-up bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-2 h-8 bg-gradient-to-b from-primary-600 to-primary-800 dark:from-primary-400 dark:to-primary-600 rounded-full mr-4"></span>
                About This Project
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap leading-relaxed">
                  {project.content}
                </div>
              </div>
            </div>

            {/* ===== Ini nanti ditambahkan - CATATAN */}
            {/* Features Section (if you want to add) */}
            {/* <div className="animate-fade-in-up bg-gradient-to-br from-primary-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-primary-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Key Features
              </h3>
              <ul className="space-y-3">
                {[
                  'Responsive Design',
                  'Modern UI/UX',
                  'Performance Optimized',
                  'SEO Friendly',
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div> */}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Technologies */}
              <div className="animate-fade-in-up bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <TagIcon className="w-5 h-5 mr-2 text-primary-600 dark:text-primary-400" />
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span
                      key={skill.id}
                      className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-primary-100 to-purple-100 dark:from-primary-900/30 dark:to-purple-900/30 text-primary-800 dark:text-primary-400 rounded-lg border border-primary-200 dark:border-primary-800 hover:scale-105 transition-transform"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              {(project.demo_url || project.github_url) && (
                <div className="animate-fade-in-up bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Project Links
                  </h3>
                  <div className="space-y-3">
                    {project.demo_url && (
                      <a
                        href={project.demo_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center w-full px-5 py-3 bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-500 dark:to-primary-600 text-white rounded-xl hover:from-primary-700 hover:to-primary-800 dark:hover:from-primary-600 dark:hover:to-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        <GlobeAltIcon className="w-5 h-5 mr-2" />
                        <span className="font-medium">View Live Demo</span>
                      </a>
                    )}
                    {project.github_url && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center w-full px-5 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-xl hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        <CodeBracketIcon className="w-5 h-5 mr-2" />
                        <span className="font-medium">View Source Code</span>
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* Project Info */}
              <div className="animate-fade-in-up bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Project Info
                </h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-sm text-gray-500 dark:text-gray-400 mb-1 flex items-center">
                      <CalendarIcon className="w-4 h-4 mr-2" />
                      Created
                    </dt>
                    <dd className="font-medium text-gray-900 dark:text-white">
                      {new Date(project.created_at). toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                      Status
                    </dt>
                    <dd>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        project.status === 'published'
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400'
                          : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400'
                      }`}>
                        {project.status === 'published' ? '✨ Published' : '🚧 Draft'}
                      </span>
                    </dd>
                  </div>
                </dl>
              </div>

              {/* CTA */}
              <div className="animate-fade-in-up bg-gradient-to-br from-primary-600 to-purple-600 dark:from-primary-900 dark:to-purple-900 rounded-2xl p-6 text-white shadow-lg">
                <h4 className="text-lg font-bold mb-2">Interested in working together?</h4>
                <p className="text-white/90 text-sm mb-4">
                  Let's discuss your next project
                </p>
                <Link
                  href="/contact"
                  className="block w-full px-5 py-3 bg-white text-primary-600 dark:text-primary-700 rounded-xl hover:bg-gray-100 transition-colors text-center font-medium"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
