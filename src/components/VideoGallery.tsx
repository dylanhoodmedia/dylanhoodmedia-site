import { Play } from 'lucide-react';

const videos = [
  {
    id: 1,
    thumbnail: 'https://images.unsplash.com/photo-1585983549382-4e608379fc1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoeSUyMHBvcnRmb2xpb3xlbnwxfHx8fDE3Njg2MDc5NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Brand Commercial',
    duration: '2:15',
    category: 'Commercial'
  },
  {
    id: 2,
    thumbnail: 'https://images.unsplash.com/photo-1705147651064-36aedc005020?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBsYW5kc2NhcGUlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3Njg2MDc5NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Documentary Short',
    duration: '5:30',
    category: 'Documentary'
  },
  {
    id: 3,
    thumbnail: 'https://images.unsplash.com/photo-1762436933065-fe6d7f51d4f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHN0cmVldCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2ODU0OTg1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Music Video',
    duration: '3:45',
    category: 'Music Video'
  },
  {
    id: 4,
    thumbnail: 'https://images.unsplash.com/photo-1649107835391-07d0b93a409d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwc3R1ZGlvfGVufDF8fHx8MTc2ODU0Mjg4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Corporate Video',
    duration: '1:30',
    category: 'Corporate'
  }
];

export function VideoGallery() {
  return (
    <section id="videos" className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl text-gray-900 mb-4">Video Work</h2>
          <p className="text-gray-600">Real estate, commercial, and event video with a clean, modern feel.</p>
        </div>

        {/* Vimeo Embed */}
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-900">
            <iframe
              src="https://player.vimeo.com/video/1155318727?badge=0&autopause=0&player_id=0&app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              className="absolute top-0 left-0 w-full h-full"
              title="Dylan Hood Media Video"
            />
          </div>
        </div>
      </div>
    </section>
  );
}