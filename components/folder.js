const callouts = [
    {
      name: 'Desk and Office',
      description: 'Work from home accessories',
      imageSrc: '/assets/jardins/bgJA.png',
      imageAlt: 'imagem jardins',
      href: '#',
    },
    {
      name: 'Self-Improvement',
      description: 'Journals and note-taking',
      imageSrc: '/assets/centralpark/bgCP.png',
      imageAlt: 'imagem central park',
      href: '#',
    },
    {
      name: 'Travel',
      description: 'Daily commute essentials',
      imageSrc: '/assets/aurea/bgAU.jpg',
      imageAlt: 'imagem aurea',
      href: '#',
    },
  ]
  
  export default function Folder() {
    return (
        <div className="bg-gray-100">
             <div className="pb-50 shadow-2xl bg-gradient-to-r from-black via-gray-700 to-black rounded-lg flex items-center justify-center w-full h-24 sm:px-6 lg:px-8">
            <a className="text-white flex items-center justify-center">
            <h2 className="text-4xl font-serif text-center text-yellow-300">Comodidade e praticidade para sua família.</h2>
            </a>
            </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-5 sm:py-12 lg:py-0 lg:max-w-none">
            <div className="pt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="border-2 border-gray-500 pb-5 relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }