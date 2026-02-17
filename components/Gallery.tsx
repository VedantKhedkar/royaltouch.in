import { getImagePath, GALLERY_ITEMS } from "@/lib/media";

export default function Gallery() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <h2 className="text-6xl font-serif text-royal-purple leading-none">The Master <br/> <span className="italic text-royal-gold">Portfolio</span></h2>
          <p className="max-w-xs text-gray-400 text-sm leading-relaxed">
            A curated collection of transformations that define elegance and royal sophistication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {GALLERY_ITEMS.map((item, idx) => (
            <div 
              key={idx} 
              className={`relative overflow-hidden group cursor-pointer rounded-sm 
                ${idx === 0 ? "md:col-span-8 aspect-video" : "md:col-span-4 aspect-square"}`}
            >
              {/* Image with Parallax-like scale */}
              <img 
                src={getImagePath(item.id)} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 ease-expo"
              />
              
              {/* Dynamic Overlay */}
              <div className="absolute inset-0 bg-royal-purple/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0">
                <span className="text-royal-gold text-[10px] tracking-[0.3em] font-black uppercase mb-2">{item.category}</span>
                <h3 className="text-white text-2xl font-serif">{item.title}</h3>
                <div className="w-12 h-[1px] bg-royal-gold mt-4 group-hover:w-full transition-all duration-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}