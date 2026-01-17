import { useState } from 'react';

const photos = [
  // Real Estate
  {
    id: 1,
    url: 'https://raw.githubusercontent.com/dylanhoodmedia/dylanhoodmedia-site/main/assets/images/real-estate/422_robertson_front.jpg',
    title: '422 Robertson - Front View',
    category: 'Real Estate'
  },
  {
    id: 2,
    url: 'https://raw.githubusercontent.com/dylanhoodmedia/dylanhoodmedia-site/main/assets/images/real-estate/422_robertson_front_right.jpg',
    title: '422 Robertson - Exterior',
    category: 'Real Estate'
  },
  {
    id: 3,
    url: 'https://raw.githubusercontent.com/dylanhoodmedia/dylanhoodmedia-site/main/assets/images/real-estate/422_robertson_kitchen.jpg',
    title: '422 Robertson - Kitchen',
    category: 'Real Estate'
  },
  // Commercial
  {
    id: 4,
    url: 'https://raw.githubusercontent.com/dylanhoodmedia/dylanhoodmedia-site/main/assets/images/commercial/american_flag.jpg',
    title: 'American Flag',
    category: 'Commercial'
  },
  {
    id: 5,
    url: 'https://raw.githubusercontent.com/dylanhoodmedia/dylanhoodmedia-site/main/assets/images/commercial/colonial_sign.jpg',
    title: 'Colonial Sign',
    category: 'Commercial'
  },
  {
    id: 6,
    url: 'https://raw.githubusercontent.com/dylanhoodmedia/dylanhoodmedia-site/main/assets/images/commercial/colonial_town.jpg',
    title: 'Colonial Town',
    category: 'Commercial'
  },
  {
    id: 7,
    url: 'https://raw.githubusercontent.com/dylanhoodmedia/dylanhoodmedia-site/main/assets/images/commercial/donut_shop.jpg',
    title: 'Donut Shop',
    category: 'Commercial'
  },
  {
    id: 8,
    url: 'https://raw.githubusercontent.com/dylanhoodmedia/dylanhoodmedia-site/main/assets/images/commercial/park_crew.jpg',
    title: 'Park Crew',
    category: 'Commercial'
  },
  {
    id: 9,
    url: 'https://raw.githubusercontent.com/dylanhoodmedia/dylanhoodmedia-site/main/assets/images/commercial/park_sign.jpg',
    title: 'Park Sign',
    category: 'Commercial'
  },
  // Events
  {
    id: 10,
    url: 'https://raw.githubusercontent.com/dylanhoodmedia/dylanhoodmedia-site/main/assets/images/events/dad_kid.jpg',
    title: 'Family Moment',
    category: 'Events'
  },
  {
    id: 11,
    url: 'https://raw.githubusercontent.com/dylanhoodmedia/dylanhoodmedia-site/main/assets/images/events/food%20_truck.jpg',
    title: 'Food Truck',
    category: 'Events'
  },
  {
    id: 12,
    url: 'https://raw.githubusercontent.com/dylanhoodmedia/dylanhoodmedia-site/main/assets/images/events/girl_playground.jpg',
    title: 'Playground Fun',
    category: 'Events'
  },
  {
    id: 13,
    url: 'https://raw.githubusercontent.com/dylanhoodmedia/dylanhoodmedia-site/main/assets/images/events/kid_playground.jpg',
    title: 'Kids at Play',
    category: 'Events'
  },
  {
    id: 14,
    url: 'https://raw.githubusercontent.com/dylanhoodmedia/dylanhoodmedia-site/main/assets/images/events/kids_shop.jpg',
    title: 'Kids Shopping',
    category: 'Events'
  },
  {
    id: 15,
    url: 'https://raw.githubusercontent.com/dylanhoodmedia/dylanhoodmedia-site/main/assets/images/events/old_couple.jpg',
    title: 'Community Event',
    category: 'Events'
  }
];

export function PhotoGallery() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const categories = ['All', 'Real Estate', 'Commercial', 'Events'];

  const filteredPhotos = selectedFilter === 'All' 
    ? photos 
    : photos.filter(photo => photo.category === selectedFilter);

  return (
    <section id="work" className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24">
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl text-gray-900 mb-4">Photography</h2>
        <p className="text-gray-600 mb-8">Real estate, commercial, and event photography with a clean, natural look.</p>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedFilter === category
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPhotos.map(photo => (
          <div 
            key={photo.id}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 cursor-pointer"
          >
            <img 
              src={photo.url} 
              alt={photo.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
}