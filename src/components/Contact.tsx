import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <h2 className="text-3xl md:text-5xl text-gray-900 mb-6">Let's Work Together</h2>
            
            <p className="text-gray-600 mb-4">
              Real estate agents can book photo and video shoots directly using the scheduling link.
            </p>
            <p className="text-gray-600 mb-8">
              For commercial projects, events, or other creative work, reach out by phone or email and we'll talk through the details.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Email</div>
                  <a href="mailto:hello@dylanhoodmedia.com" className="text-gray-900 hover:underline">
                    hello@dylanhoodmedia.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Call or Text</div>
                  <a href="tel:+13369898201" className="text-gray-900 hover:underline">
                    (336) 989-8201
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Location</div>
                  <div className="text-gray-900">
                    Based in Southern Virginia | available for travel
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-6">
            {/* Pricing Section */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl text-gray-900 mb-4">Pricing (Real Estate)</h3>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-900">Photos</span>
                  <span className="text-gray-900 font-medium">$200</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-900">Videos</span>
                  <span className="text-gray-900 font-medium">$200</span>
                </div>
              </div>
              <div className="text-sm text-gray-600 space-y-4">
                <p>*Homes over 3,000 sq ft may require a custom rate</p>
                <p>For commercial and event projects, reach out and I'll tailor a custom quote.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl text-gray-900 mb-4">Schedule a Shoot</h3>
              <p className="text-gray-600 mb-6">
                Book your real estate photography or video session using my online scheduler.
              </p>
              <a 
                href="https://calendar.app.google/LR3TdVFeeZvYV5wX9"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gray-900 text-white text-center px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
              >
                Book a Shoot
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}