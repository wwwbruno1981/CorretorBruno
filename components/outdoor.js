import Nav from './nav'
import Footer from './footer'
import Formulario from './formulario'

const callouts = [
  {
    name: 'Jardins',
    description: 'Centro - Nova Iguaçu',
    imageSrc: '/assets/jardins/bgJA.png',
    imageAlt: 'imagem jardins',
    href: '/detalhes',
  }
]
export default function Outdoor() {

  return (
    <>
    <Nav />
    {callouts.map((callout) => (
             
    <div key={callout.name} className="relative bg-black md:bg-black overflow-hidden">
                <div className="lmax-w-full">
                    <img
                    className="md:h-96 lg:w-full lg:h-full"
                    src="/assets/bgCBJJ.png"
                    alt="imagem"
                    /> 
                </div>
                <main className="mx-auto max-w-7xl px-4 sm:px-6 mb-5 md:mb-0">
                <div className="mt-50 lg:absolute lg:inset-y-5 sm:text-center lg:text-left">
               
                <Formulario />
               
                 
              <p className="mt-3 block xl:inline text-base text-yellow-300 sm:mt-5 sm:text-3lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-5xl lg:mx-0">
              Conheça alguns frameworks front-end utilizados no mercado Tech, empregadas neste static-site.
              <span className="block text-indigo-600 xl:inline">{callout.description}</span>
              </p>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="max-w-md w-full space-y-8">
                   
                  </div>
                </div>
             </div>
          </main>
        
<div className="relative bg-white overflow-hidden">
        <div className="max-w-7x1 mx-auto">
         <div className="relative z-10 pb-8 bg-black sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          
       
  <img
     className=" h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
     src="/assets/bgCB.png"
     alt=""
     width={1000} 
     height={1000}
    /> 
      
      <svg class="hidden lg:block absolute  right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" 
           fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <polygon  points="50,0 100,0 50,100 0,100" 
                fill="#000" 
                stroke="black" stroke-width="3"
                />
       </svg>
       
       
    </div>
  </div>
  <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
    <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" 
   src="/assets/bgCBNIS.png"
   alt=""
   />
    </div>
</div>
<div class="bg-gray-100">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
     

      <div class="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
        <div class="group relative">
          <div class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
            <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="w-full h-full object-center object-cover" />
          </div>
          <h3 class="mt-6 text-sm text-gray-500">
            <a href="#">
              <span class="absolute inset-0"></span>
              Desk and Office
            </a>
          </h3>
          <p class="text-base font-semibold text-gray-900">Work from home accessories</p>
        </div>

        <div class="group relative">
          <div class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
            <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg" alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." class="w-full h-full object-center object-cover" />
          </div>
          <h3 class="mt-6 text-sm text-gray-500">
            <a href="#">
              <span class="absolute inset-0"></span>
              Self-Improvement
            </a>
          </h3>
          <p class="text-base font-semibold text-gray-900">Journals and note-taking</p>
        </div>

        <div class="group relative">
          <div class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
            <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg" alt="Collection of four insulated travel bottles on wooden shelf." class="w-full h-full object-center object-cover" />
          </div>
          <h3 class="mt-6 text-sm text-gray-500">
            <a href="#">
              <span class="absolute inset-0"></span>
              Travel
            </a>
          </h3>
          <p class="text-base font-semibold text-gray-900">Daily commute essentials</p>
        </div>
      </div>
    </div>
  </div>
</div>

</div>

))}
    <Footer />
    </>
  )
}
/*

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
        */