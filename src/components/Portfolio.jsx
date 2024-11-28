function Portfolio() {
  const projects = [
    {
      title: "Budget Commuters E-Commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      deployedUrl: "https://example.com",
      githubUrl: "https://github.com/kathylopez97/Budget-Commuter",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application",
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&h=600&fit=crop",
      deployedUrl: "https://example.com",
      githubUrl: "https://github.com",
      tags: ["React", "TypeScript", "Redux"]
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather tracking with OpenWeather API",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
      deployedUrl: "https://example.com",
      githubUrl: "https://github.com",
      tags: ["React", "API Integration"]
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media metrics",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      deployedUrl: "https://example.com",
      githubUrl: "https://github.com",
      tags: ["React", "D3.js", "Firebase"]
    },
    {
      title: "Power Pulse Fitness Tracker",
      description: "Personal fitness tracking and workout planning app",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
      deployedUrl: "https://example.com",
      githubUrl: "https://github.com",
      tags: ["React", "GraphQL", "MongoDB"]
    },
    {
      title: "Recipe Finder",
      description: "AI-powered recipe recommendation engine",
      image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&h=600&fit=crop",
      deployedUrl: "https://example.com",
      githubUrl: "https://github.com",
      tags: ["React", "AI/ML", "Python"]
    }
  ];

  return (
    <section className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">My Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-transform hover:scale-105">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-sm rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between">
                <a
                  href={project.deployedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;