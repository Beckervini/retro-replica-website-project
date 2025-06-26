
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-700 mb-4 relative inline-block">
            Entre em Contato
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mt-2"></div>
          </h2>
          <p className="text-slate-600 text-lg">
            Vamos conversar sobre oportunidades e projetos interessantes!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/50">
            <h3 className="text-xl font-bold text-slate-700 mb-6">Informações de Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Mail className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-slate-700">Email</p>
                  <p className="text-slate-600">vinicius@exemplo.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Phone className="text-green-600" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-slate-700">Telefone</p>
                  <p className="text-slate-600">(11) 99999-9999</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <MapPin className="text-purple-600" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-slate-700">Localização</p>
                  <p className="text-slate-600">São Paulo, SP</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/50">
            <h3 className="text-xl font-bold text-slate-700 mb-6">Envie uma Mensagem</h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Seu email"
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="Sua mensagem"
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300"
              >
                <Send size={18} />
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
