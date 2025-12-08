import PublicLayout from '@/Layouts/PublicLayout';
import { Skill } from '@/types';

interface AboutProps {
  skills: Skill[];
  settings: {
    profile_photo?: string;
    site_description?: string;
  };
}

export default function About({ skills, settings }: AboutProps) {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <PublicLayout title="About">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-primary-100">
            Get to know more about me and my skills
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Profile Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              {settings.profile_photo ? (
                <img
                  src={`/storage/${settings.profile_photo}`}
                  alt="Profile"
                  className="w-full h-auto rounded-lg mb-6"
                />
              ) : (
                <div className="w-full h-64 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-white text-6xl font-bold">U</span>
                </div>
              )}
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Name</h2>
              <p className="text-gray-600 mb-4">Full Stack Developer</p>
              {/* Add social links here */}
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-2">
            {/* About Text */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Am I?</h2>
              <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  {settings.site_description ||
                    "I'm a passionate Full Stack Developer with expertise in building modern web applications. I love creating elegant solutions to complex problems and continuously learning new technologies."}
                </p>
                <p>
                  With years of experience in web development, I've worked on various projects ranging from small business websites to large-scale applications. My focus is on writing clean, maintainable code and creating intuitive user experiences.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and tutorials.
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Skills</h2>
              <div className="space-y-8">
                {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
                  <div key={category}>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">{category}</h3>
                    <div className="space-y-4">
                      {categorySkills.map((skill) => (
                        <div key={skill. id}>
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-gray-700">{skill.name}</span>
                            <span className="text-sm text-gray-600">{skill.proficiency}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div
                              className="bg-primary-600 h-3 rounded-full transition-all duration-500"
                              style={{ width: `${skill.proficiency}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
