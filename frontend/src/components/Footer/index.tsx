import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: 'https://github.com/nithintejesh', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com/nithintejesh', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/in/nithintejesh', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:nithintejesh@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center h-16">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Blight Detect. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}