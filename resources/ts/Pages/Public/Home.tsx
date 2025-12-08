import PublicLayout from '@/Layouts/PublicLayout';
import { Link } from '@inertiajs/react';
import { ArrowRightIcon, CodeBracketIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import { Project, Post } from '@/types';

interface HomeProps {
  featuredProjects: Project[];
  latestPosts: Post[];
}

export default function Home({ featuredProjects, latestPosts }: HomeProps) {
  return (
    <PublicLayout title="Home">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Hi, I'm <span className="text-primary-200">Your Name</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Full Stack Developer & Designer crafting beautiful digital experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/portofolio"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
              >
                View My Work
                <ArrowRightIcon className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <CodeBracketIcon className="w-8 h-8 text-primary-600 mr-2" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Featured Projects
              </h2>
            </div>
            <p className="text-gray-600 text-lg">
              Some of my recent work
            </p>
          </div>

          {featuredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/portofolio/${project.slug}`}
                  className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {project.featured_image ?  (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={`/storage/${project.featured_image}`}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ) : (
                    <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                      <span className="text-white text-4xl font-bold">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill. id}
                          className="px-3 py-1 text-xs font-medium bg-primary-100 text-primary-800 rounded-full"
                        >
                          {skill.name}
                        </span>
                      ))}
                      {project.skills.length > 3 && (
                        <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
                          +{project.skills.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No projects yet. </p>
          )}

          <div className="text-center mt-12">
            <Link
              href="/portofolio"
              className="inline-flex items-center text-primary-600 hover:text-primary-800 font-semibold"
            >
              View All Projects
              <ArrowRightIcon className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <DocumentTextIcon className="w-8 h-8 text-primary-600 mr-2" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Latest Articles
              </h2>
            </div>
            <p className="text-gray-600 text-lg">
              Thoughts, tutorials, and insights
            </p>
          </div>

          {latestPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {post.featured_image ? (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={`/storage/${post.featured_image}`}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ) : (
                    <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                      <span className="text-white text-4xl font-bold">
                        {post.title.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span className="text-primary-600 font-medium">
                        {post.category. name}
                      </span>
                      <span className="mx-2">•</span>
                      <span>{new Date(post.created_at).toLocaleDateString()}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No blog posts yet.</p>
          )}

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center text-primary-600 hover:text-primary-800 font-semibold"
            >
              View All Articles
              <ArrowRightIcon className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
          >
            Get In Touch
            <ArrowRightIcon className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </PublicLayout>
  );
}
