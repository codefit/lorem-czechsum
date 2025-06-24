import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Codefit Webdesign. Všechna práva vyhrazena.
          </div>
          <div className="text-gray-600 dark:text-gray-400 text-sm">
            <a 
              href="https://www.codefit.cz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 underline"
            >
              www.codefit.cz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}; 