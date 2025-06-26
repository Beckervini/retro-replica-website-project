
import React from 'react';

interface Skill {
  name: string;
  category: string;
  level: string;
}

interface SkillCardProps {
  skill: Skill;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Avançado':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'Intermediário':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default:
        return 'bg-blue-100 text-blue-700 border-blue-200';
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
      <h3 className="font-bold text-slate-700 text-lg mb-2">{skill.name}</h3>
      <p className="text-blue-600 font-medium mb-3">{skill.category}</p>
      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${getLevelColor(skill.level)}`}>
        {skill.level}
      </span>
    </div>
  );
};

export default SkillCard;
