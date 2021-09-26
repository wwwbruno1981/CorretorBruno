import Nav from '../components/nav';
import Galery from '../components/galery';
import Folder from '../components/folder';

function Showcase() {
    return (
         <>
         <Nav />
      <div className="relative bg-fixed overflow-hidden">
        <div className="max-w-7x1 mx-auto">
        <div className="relative pt-4 sm:px-8 z-10 bg-gradient-to-r from-gray-600 via-black to-gray-600 lg:max-h-96 lg:pb-28 xl:pb-32">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 md:w-full ms:w-full lg:w-2/4 w-full">
         <img
            className="bg-contain"
            src="/assets/bgCB.png"
            alt=""
              /> 
          </div>
      <main className="relative mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-5">
       <div className="sm:text-center lg:text-left">
         <div className="min-h-full flex justify-end text-opacity-50 bg-transparent px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
            <h1 className="text-center text-4xl tracking-tight font-sans sm:text-4xl md:text-4xl">
              <span className="block font-extrabold text-purple-500 xl:inline">Consultoria Imobiliaria</span>{' '} 
              <span className="block text-white xl:inline">Segura & Inteligente</span>
            </h1>

            <form className="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
              <div>
                  <label htmlFor="name" className="sr-only">
                    Seu nome
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="name"
                    autoComplete="name"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="mt-4 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="mt-4 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div>

                <button
                  type="submit"
                  className="mb-2 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  </span>
                  Mais Informações
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
     </main>
   </div>
 </div>

 </div>
 
 <Folder />
     <Galery />
     
            </>
          )
        }

export default Showcase