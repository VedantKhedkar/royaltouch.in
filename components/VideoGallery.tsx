export default function VideoGallery() {
  const videos = [
    { id: 1, thumb: "vid-thumb-1.jpg", title: "Bridal Glow" },
    { id: 2, thumb: "vid-thumb-2.jpg", title: "Masterclass Highlight" },
    { id: 3, thumb: "vid-thumb-3.jpg", title: "Evening Glam" }
  ];

  return (
    <section className="py-24 bg-royal-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-serif gold-gradient-text mb-12">Art in Motion</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((vid) => (
            <div key={vid.id} className="relative aspect-[9/16] bg-royal-purple rounded-3xl overflow-hidden group cursor-pointer shadow-2xl">
              <img src={`https://media.bizonance.in/api/v1/image/download/.../${vid.thumb}`} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                </div>
                <p className="mt-4 font-bold tracking-widest text-xs uppercase">{vid.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}