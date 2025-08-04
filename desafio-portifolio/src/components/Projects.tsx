import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Plataforma completa de e-commerce desenvolvida com React e TypeScript, incluindo carrinho de compras, sistema de pagamento e painel administrativo.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      description:
        "Dashboard interativo para análise de dados com gráficos dinâmicos, filtros avançados e relatórios em tempo real.",
      image:
        "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
    },
    {
      id: 3,
      title: "App de Gestão de Tarefas",
      description:
        "Aplicativo colaborativo para gestão de projetos com funcionalidades de arrastar e soltar, notificações em tempo real.",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React Native", "Firebase", "Redux"],
    },
    {
      id: 4,
      title: "Sistema de Reservas",
      description:
        "Sistema completo de reservas online com calendário interativo, pagamentos integrados e notificações automáticas.",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "Stripe", "Prisma", "MySQL"],
    },
  ];

  return (
    <section id="projetos" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-left">
          Projetos
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden hover:border-slate-600/50 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  PROJETO {project.id}
                </h3>
                <h4 className="text-xl font-semibold text-gray-300 mb-4">
                  {project.title}
                </h4>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-700/50 text-gray-300 text-sm rounded-full border border-slate-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                  Clique aqui
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
