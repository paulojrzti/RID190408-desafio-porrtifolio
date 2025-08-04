import React from "react";

const Technologies = () => {
  const technologies = [
    { name: "React", level: 95, color: "from-blue-400 to-blue-600" },
    { name: "TypeScript", level: 90, color: "from-blue-500 to-blue-700" },
    { name: "JavaScript", level: 98, color: "from-yellow-400 to-yellow-600" },
    { name: "Next.js", level: 85, color: "from-gray-400 to-gray-600" },
    { name: "Vue.js", level: 80, color: "from-green-400 to-green-600" },
    { name: "Node.js", level: 75, color: "from-green-500 to-green-700" },
    { name: "Tailwind CSS", level: 92, color: "from-cyan-400 to-cyan-600" },
    { name: "SCSS/Sass", level: 88, color: "from-pink-400 to-pink-600" },
    { name: "Git/GitHub", level: 90, color: "from-orange-400 to-orange-600" },
    { name: "Figma", level: 85, color: "from-purple-400 to-purple-600" },
    { name: "MongoDB", level: 70, color: "from-green-600 to-green-800" },
    { name: "PostgreSQL", level: 75, color: "from-blue-600 to-blue-800" },
  ];

  return (
    <section id="tecnologias" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
          Tecnologias
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 hover:border-slate-600/50 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-white">
                  {tech.name}
                </h3>
                <span className="text-sm text-gray-400">{tech.level}%</span>
              </div>

              <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${tech.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${tech.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">
            <div className="text-3xl font-bold text-white mb-2">3+</div>
            <div className="text-gray-400">Anos de Experiência</div>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-400">Projetos Concluídos</div>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">
            <div className="text-3xl font-bold text-white mb-2">25+</div>
            <div className="text-gray-400">Clientes Satisfeitos</div>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-gray-400">Dedicação</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
