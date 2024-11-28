function About() {
  return (
    <section className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src=""
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I am a full-stack web developer with a passion for creating
              beautiful, user-friendly, and functional applications. I have
              experience with a variety of web technologies and am always
              looking to learn more. I am a quick learner and a team player who
              is always looking to improve my skills.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
              I have experience with a variety of web technologies, including
              HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and
              MySQL. I am always looking to learn more and improve my skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
