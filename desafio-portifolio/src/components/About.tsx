import React from "react";

const About = () => {
  const timeline = [
    {
      year: "2021",
      title: "Início da Jornada",
      description:
        "Comecei meus estudos em desenvolvimento web, focando em HTML, CSS e JavaScript. Descobri minha paixão por criar interfaces interativas e responsivas.",
    },
    {
      year: "2022",
      title: "Especialização em React",
      description:
        "Aprofundei meus conhecimentos em React e TypeScript, desenvolvendo projetos pessoais e contribuindo para projetos open source da comunidade.",
    },
    {
      year: "2023",
      title: "Experiência Profissional",
      description:
        "Iniciei minha carreira profissional como desenvolvedor front-end, trabalhando em projetos de e-commerce e aplicações web complexas.",
    },
    {
      year: "2024",
      title: "Desenvolvedor Sênior",
      description:
        "Atualmente trabalho como desenvolvedor front-end sênior, liderando projetos e mentorando desenvolvedores juniores, sempre buscando as melhores práticas.",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-left">
          Sobre mim
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {timeline.map((item, index) => (
            <div key={index} className="relative">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 h-full hover:border-slate-600/50 transition-all duration-300">
                <div className="text-2xl font-bold text-white mb-4 text-center">
                  {item.year}
                </div>
                <h3 className="text-lg font-semibold text-gray-300 mb-4 text-center">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-center">
                  {item.description}
                </p>
              </div>

              {/* Connector line for desktop */}
              {index < timeline.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Minha Missão</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Transformar ideias em experiências digitais excepcionais,
              combinando design intuitivo com código limpo e performático.
              Acredito que a tecnologia deve ser acessível e proporcionar valor
              real para usuários e empresas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
