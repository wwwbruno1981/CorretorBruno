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
            src="/assets/bgCB.png"
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