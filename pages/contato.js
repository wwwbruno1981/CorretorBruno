import Nav from '../components/nav'
import Footer from '../components/footer'
import Formulario from '../components/formulario';

export default function Index() {

  return (
    <>
    <Nav />
    <div className="relative overflow-hidden">
        <div className="max-w-7x1 mx-auto">
        <div className="relative pt-4 sm:px-8 z-10 bg-gradient-to-r from-gray-600 via-black to-gray-600 lg:h-full lg:pb-28 xl:pb-36">
          <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src="/assets/bgFA.jpg"
              alt=""
            />
          </div>
          <Formulario />
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}