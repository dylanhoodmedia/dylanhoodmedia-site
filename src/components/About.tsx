export function About() {
  return (
    <section id="about" className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl text-gray-900 mb-6">About Me</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              I'm Dylan, a photographer and videographer with a clean, practical approach to visual work.
            </p>
            <p>
              From real estate and commercial spaces to events and small businesses, I focus on capturing things honestly and with intention. I'm less interested in trends and more interested in creating work that feels timeless and useful.
            </p>
            <p>
              I value clear communication, fast turnaround, and making the process easy from start to finish.
            </p>
            <p>
              Based in Virginia.
            </p>
          </div>
        </div>

        <div className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-lg bg-gray-100">
          <img 
            src="https://raw.githubusercontent.com/dylanhoodmedia/dylanhoodmedia-site/main/assets/images/headshots/Dylan%20Pro%20Pic.jpg"
            alt="Dylan Hood"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}