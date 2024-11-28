import { useState } from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Navbar from './components/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [currentSection, setCurrentSection] = useState('about');

  const renderSection = () => {
    switch (currentSection) {
      case 'about':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      case 'resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100">
      <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
      
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {renderSection()}
      </main>

      <footer className="bg-white dark:bg-gray-900 shadow-lg mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/Midas24k" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/rod-hughey24k/" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
          <p className="text-center text-gray-500 dark:text-gray-400 mt-4">
            © 2024 RLH Designs. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;