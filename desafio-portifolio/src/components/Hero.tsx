import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-900 pt-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
          Desenvolvedor Front-end Apaixonado por Criar Experiências Digitais
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Especializado em React, TypeScript e tecnologias modernas para
          construir interfaces responsivas e performáticas que encantam
          usuários.
        </p>

        <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
          Saber mais
        </button>
      </div>
    </section>
  );
};

export default Hero;
