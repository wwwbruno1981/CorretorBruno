const product = {
   
    images: [
      {
        src: '/assets/goldenclube/bgLA.jpg',
        alt: 'Two each of gray, white, and black shirts laying flat.',
      },
      {
        src: '/assets/goldenclube/bgGC2.png',
        alt: 'Model wearing plain black basic tee.',
      },
      {
        src: '/assets/goldenclube/bgGC1.png',
        alt: 'Model wearing plain gray basic tee.',
      },
      {
        src: '/assets/goldenclube/bgFA.jpg',
        alt: 'Model wearing plain white basic tee.',
      },
    ],
   }

function Galery() {
    return (
<>
    {/* Image gallery */}
    <div className="pt-10 bg-gradient-to-r from-black via-gray-700 to-black">
    <div className="pb-50 shadow-2xl bg-gradient-to-r from-black via-gray-700 to-black rounded-lg flex items-center justify-center w-full h-24 sm:px-6 lg:px-8">
            <a className="text-white flex items-center justify-center">
            <h2 className="text-4xl font-serif text-center text-yellow-300">Modernidade e segurança em um só lugar.</h2>
            </a>
            </div>
    <div className="mt-6 pb-10 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
            <img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src={product.images[1].src}
                alt={product.images[1].alt}
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src={product.images[2].src}
                alt={product.images[2].alt}
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>
          <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
            <img
              src={product.images[3].src}
              alt={product.images[3].alt}
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>
      </div> 
        </>
    )
}
export default Galery