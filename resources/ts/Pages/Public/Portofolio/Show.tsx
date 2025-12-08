import PublicLayout from '@/Layouts/PublicLayout';
import { Link } from '@inertiajs/react';
import { ArrowLeftIcon, GlobeAltIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import { Project } from '@/types';

interface PortofolioShowProps {
  project: Project;
}

export default function PortofolioShow({ project }: PortofolioShowProps) {
  return (
    <PublicLayout title={project.title}>
      {/* Header */}
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/portofolio"
            className="inline-flex items-center text-primary-300 hover:text-primary-200 mb-6"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Back to Portofolio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-gray-300">{project.description}</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Featured Image */}
            {project.featured_image && (
              <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={`/storage/${project.featured_image}`}
                  alt={project.title}
                  className="w-full h-auto"
                />
              </div>
            )}

            {/* Content */}
            <div className="prose max-w-none">
              <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                {project.content}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6 space-y-6">
              {/* Technologies */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span
                      key={skill.id}
                      className="px-3 py-2 text-sm font-medium bg-primary-100 text-primary-800 rounded-lg"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              {(project.demo_url || project.github_url) && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Project Links
                  </h3>
                  <div className="space-y-2">
                    {project.demo_url && (
                      <a
                        href={project.demo_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center w-full px-4 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                      >
                        <GlobeAltIcon className="w-5 h-5 mr-2" />
                        View Live Demo
                      </a>
                    )}
                    {project.github_url && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center w-full px-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        <CodeBracketIcon className="w-5 h-5 mr-2" />
                        View Source Code
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* Project Info */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Project Info
                </h3>
                <dl className="space-y-2 text-sm">
                  <div>
                    <dt className="text-gray-500">Status</dt>
                    <dd className="font-medium text-gray-900 capitalize">
                      {project.status}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Created</dt>
                    <dd className="font-medium text-gray-900">
                      {new Date(project.created_at). toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                      })}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
