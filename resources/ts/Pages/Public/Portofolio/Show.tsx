
// interface PortofolioShowProps {
//   project: Project;
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
import DOMPurify from 'dompurify';
import { Project } from '@/types';

interface PortofolioShowProps {
  project: Project;
}

export default function PortofolioShow({ project }: PortofolioShowProps) {
  return (
    <PublicLayout title={project.title}>
      <div className="w-full">
        {/* Hero Header */}
        <section className="relative bg-white dark:bg-slate-900 text-slate-900 dark:text-white pt-24 pb-16 overflow-hidden border-b border-slate-200 dark:border-slate-800 transition-colors">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

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
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
                  {project.title}
                </h1>
                <p className="text-xl text-slate-600 dark:text-white/80 leading-relaxed">
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
                  <div className="rounded-2xl overflow-hidden shadow-sm dark:shadow-xl border border-slate-200 dark:border-slate-800">
                    <img
                      src={`/storage/${project.featured_image}`}
                      alt={project.title}
                      className="w-full h-auto hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              )}

              {/* Project Description */}
              <div className="animate-fade-in-up bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm dark:shadow-lg border border-slate-200 dark:border-slate-700/50">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                  <span className="w-2 h-8 bg-blue-600 dark:bg-blue-500 rounded-full mr-4"></span>
                  About This Project
                </h2>
                <div className="prose prose-lg dark:prose-invert max-w-none marker:text-slate-500">
                  <div
                    className="text-slate-300 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(project.content) }}
                  />
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Technologies */}
                <div className="animate-fade-in-up bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm dark:shadow-lg border border-slate-200 dark:border-slate-700/50">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                    <TagIcon className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.skills && project.skills.length > 0 ? (
                        project.skills.map((skill) => (
                          <span
                            key={skill.id}
                            className="px-4 py-2 text-sm font-medium bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-600/50 hover:scale-105 transition-transform"
                          >
                            {skill.name}
                          </span>
                        ))
                    ) : project.tags ? (
                        project.tags.split(",").map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 text-sm font-medium bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-600/50 hover:scale-105 transition-transform"
                          >
                            {tag.trim()}
                          </span>
                        ))
                    ) : (
                        <span className="text-sm text-slate-500">No specific technologies listed.</span>
                    )}
                  </div>
                </div>

                {/* Project Links */}
                {(project.demo_url || project.github_url) && (
                  <div className="animate-fade-in-up bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm dark:shadow-lg border border-slate-200 dark:border-slate-700/50">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                      Project Links
                    </h3>
                    <div className="space-y-3">
                      {project.demo_url && (
                        <a
                          href={project.demo_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center w-full px-5 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30"
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
                          className="flex items-center w-full px-5 py-3 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 shadow-sm dark:shadow-lg"
                        >
                          <CodeBracketIcon className="w-5 h-5 mr-2" />
                          <span className="font-medium">View Source Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                )}

                {/* Project Info */}
                <div className="animate-fade-in-up bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm dark:shadow-lg border border-slate-200 dark:border-slate-700/50">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    Project Info
                  </h3>
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-sm text-slate-500 dark:text-slate-400 mb-1 flex items-center">
                        <CalendarIcon className="w-4 h-4 mr-2" />
                        Created
                      </dt>
                      <dd className="font-medium text-slate-900 dark:text-white">
                        {new Date(project.created_at).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm text-slate-400 mb-1">
                        Status
                      </dt>
                      <dd>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${project.status === 'published'
                          ? 'bg-blue-900/30 text-blue-400'
                          : 'bg-yellow-900/30 text-yellow-400'
                          }`}>
                          {project.status === 'published' ? '✨ Published' : '🚧 Draft'}
                        </span>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
