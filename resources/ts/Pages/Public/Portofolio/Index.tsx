import PublicLayout from '@/Layouts/PublicLayout';
import { Link, router } from '@inertiajs/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Project, Skill } from '@/types';
import { useState } from 'react';

interface PortofolioIndexProps {
  projects: Project[];
  skills: Skill[];
  selectedSkill?: string;
}

export default function PortofolioIndex({ projects, skills, selectedSkill }: PortofolioIndexProps) {
  const [filter, setFilter] = useState(selectedSkill || 'all');

  const handleFilterChange = (skillName: string) => {
    setFilter(skillName);
    if (skillName === 'all') {
      router.get('/portofolio');
    } else {
      router.get(`/portofolio?skill=${skillName}`);
    }
  };

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (! acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <PublicLayout title="Portofolio">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Portofolio</h1>
          <p className="text-xl text-primary-100">
            Explore my projects and technical work
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter by Technology</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleFilterChange('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Projects
            </button>
            {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
              <div key={category} className="flex flex-wrap gap-2">
                {categorySkills.map((skill) => (
                  <button
                    key={skill.id}
                    onClick={() => handleFilterChange(skill.name)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      filter === skill.name
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {skill.name}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {projects.length > 0 ?  (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/portofolio/${project.slug}`}
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {project.featured_image ? (
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={`/storage/${project.featured_image}`}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  </div>
                ) : (
                  <div className="h-56 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                    <span className="text-white text-5xl font-bold">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span
                        key={skill.id}
                        className="px-3 py-1 text-xs font-medium bg-primary-100 text-primary-800 rounded-full"
                      >
                        {skill. name}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <MagnifyingGlassIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-xl text-gray-500">No projects found with this filter.</p>
            <button
              onClick={() => handleFilterChange('all')}
              className="mt-4 text-primary-600 hover:text-primary-800 font-semibold"
            >
              View All Projects
            </button>
          </div>
        )}
      </div>
    </PublicLayout>
  );
}
