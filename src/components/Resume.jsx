function Resume() {
  const skills = {
    frontend: [
      "React", "JavaScript (ES6+)", "HTML5", "CSS3",
      "Tailwind CSS", "Bootstrap", "GraphQL", "Jest", "Webpack"
    ],
    backend: [
      "Node.js", "Express.js", "Python", "Django", "RESTful APIs",
      "PostgreSQL", "MongoDB", "MySQL", "Docker", 
    ],
    tools: [
      "Git", "GitHub", "VS Code", "Postman", 
      "Figma", "Bash", "Heroku", "Netlify"
    ]
  };

  return (
    <section className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Resume</h2>
          <a
            href="/path-to-your-resume.pdf"
            download
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Download Resume
          </a>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-medium mb-2 text-blue-600 dark:text-blue-400">Frontend</h4>
                <ul className="space-y-2">
                  {skills.frontend.map((skill, index) => (
                    <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-2 text-blue-600 dark:text-blue-400">Backend</h4>
                <ul className="space-y-2">
                  {skills.backend.map((skill, index) => (
                    <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-2 text-blue-600 dark:text-blue-400">Tools & Technologies</h4>
                <ul className="space-y-2">
                  {skills.tools.map((skill, index) => (
                    <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="font-medium">Bachelor of Science in Computer Science</h4>
              <p className="text-gray-600 dark:text-gray-300">University of Northwestern Oklahoma State</p>
              <p className="text-gray-500 dark:text-gray-400">In progress</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Certifications</h3>
            <ul className="space-y-2">
              <li className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-medium">Full Stack Web Development</h4>
                <p className="text-gray-500 dark:text-gray-400">University of Minnesota • 2024</p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-medium">edX Verified Certificate for AI Application and Prompt Engineering</h4>
                <p className="text-gray-500 dark:text-gray-400">edX • 2024</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;