export function Hero() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-32">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-gray-900 mb-6">
          Clean, modern photography and video for real spaces and real moments.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
          From real estate and commercial work to businesses and events, I create visuals that feel natural, polished, and intentional.
        </p>
        <button 
          onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
        >
          View Work
        </button>
      </div>
    </section>
  );
}