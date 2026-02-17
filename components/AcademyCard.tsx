export const AcademyCard = ({ title, duration, level }: any) => (
  <div className="glass-card group p-1 w-full rounded-2xl transition-all hover:scale-[1.02]">
    <div className="bg-royal-purple/40 p-10 rounded-2xl">
      <div className="flex justify-between items-start mb-12">
        <span className="text-royal-gold font-serif text-4xl">01</span>
        <span className="bg-royal-teal/20 text-royal-teal px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">{level}</span>
      </div>
      <h3 className="text-2xl text-white font-bold mb-4 group-hover:text-royal-gold transition-colors">{title}</h3>
      <p className="text-white/50 text-xs tracking-widest mb-8">DURATION: {duration}</p>
      <button className="w-full py-4 border border-white/10 text-white font-bold text-xs tracking-widest hover:bg-white hover:text-royal-purple transition-all">
        VIEW CURRICULUM
      </button>
    </div>
  </div>
);