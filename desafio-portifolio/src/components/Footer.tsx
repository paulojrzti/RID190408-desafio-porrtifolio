import React from "react";
import { Github, Linkedin, Figma } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Meu contato:
            </h3>
            <a
              href="tel:+5511988888888"
              className="text-2xl font-bold text-white hover:text-gray-300 transition-colors"
            >
              11 98888-8888
            </a>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Email:</h3>
            <a
              href="mailto:paulo.junior@example.com"
              className="text-2xl font-bold text-white hover:text-gray-300 transition-colors"
            >
              paulo.junior@example.com
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center space-x-6 mt-12 pt-8 border-t border-slate-800">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors text-gray-300 hover:text-white"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors text-gray-300 hover:text-white"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://figma.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors text-gray-300 hover:text-white"
          >
            <Figma className="w-6 h-6" />
          </a>
        </div>

        <div className="text-center text-gray-400 mt-8">
          <p>
            &copy; {new Date().getFullYear()} Paulo Junior. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
