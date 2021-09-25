import Nav from '../components/nav';
import Barra from '../components/barra';
import Galery from '../components/galery';
import Folder from '../components/folder';

function Showcase() {
    return (
         <>
         <Nav />
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7x1 mx-auto">
        <div className="relative pt-0 px-0 sm:px-0 lg:px-0 z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-4xl lg:w-full lg:pb-28 xl:pb-32">
        
        <div className="max-w-full lg:absolute lg:inset-y-0 lg:left-0">
        
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="/assets/bgCBH.png"
            alt=""
              /> 
        </div>
        
     <main className=" relative mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
       <div className="sm:text-center lg:text-left">
         <h1 className="text-5xl tracking-tight font-extrabold text-red-600 sm:text-5xl md:text-5xl">
         <span className="block xl:inline">Fashion & Accessories</span>{' '} 
           <span className="block text-indigo-700 xl:inline">All in one place for you</span>
         </h1>
         

 <div className="min-h-full flex justify-center text-opacity-50 bg-transparent py-12 px-4 sm:px-6 lg:px-8">
 <div className="max-w-md w-full space-y-8">
  <form className="mt-8 space-y-6" action="#" method="POST">
     <input type="hidden" name="remember" defaultValue="true" />
     <div className="rounded-md shadow-sm -space-y-px">
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
           className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
         className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
       >
         <span className="absolute left-0 inset-y-0 flex items-center pl-3">
         </span>
         Receber Informações
       </button>
     </div>
   </form>
 </div>
</div>
 </div>
     </main>
   </div>
 </div>
 <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-2/5">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="/assets/bgCBH.png"
          alt=""
        />
        </div>
 </div>

     <Barra />
     <Galery />
     <Folder />
            </>
          )
        }

export default Showcase