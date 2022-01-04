import Nav from '../components/nav';
import Galery from '../components/galery';
import Folder from '../components/folder';
import Formulario from '../components/formulario';

function Showcase() {
    return (
         <>
          <Nav />
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
              
                  <Formulario />
                <svg className="hidden lg:block absolute  right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" 
                     fill="currentColor" 
                     viewBox="0 0 100 100" 
                     preserveAspectRatio="none" 
                     aria-hidden="true">
                <polygon  points="50,0 100,0 50,100 0,100" 
                          fill="#000" 
                          stroke="black" 
                          stroke-width="3"
                />
                </svg>
            </div>
        </div>
           <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" 
                 src="/assets/bgCBNIS.png"
                 alt=""
            />
             
              
            </div>
         </div>
       
  <Folder />
 <Galery />
     </>
   )
 }

export default Showcase



/*
import Nav from '../components/nav';
import Galery from '../components/galery';
import Folder from '../components/folder';
import Formulario from '../components/formulario';

function Showcase() {
    return (
         <>
         <Nav />
      <div className="relative overflow-hidden">
        <div className="max-w-7x1 mx-auto">
        <div className="relative pt-4 sm:px-8 z-10 bg-gradient-to-r from-gray-600 via-black to-gray-600 lg:max-h-96 lg:pb-28 xl:pb-32">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 md:w-full ms:w-full lg:w-2/4 w-full">
         <img
            className="bg-contain"
            src="/assets/bgCBP.png"
            alt=""
              /> 
          </div>
          <Formulario />
        </div>
      </div>
    </div>
  <Folder />
 <Galery />
     </>
   )
 }

export default Showcase
*/