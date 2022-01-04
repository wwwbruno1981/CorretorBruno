
import {Disclosure} from '@headlessui/react'
import {MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'

const navigation = [
    { name: 'Inicio', href: '/'},
    { name: ' Empreendimentos', href: '/empreendimento' },
    { name: ' Sobre nós', href: '/sobre' },
    { name: ' Contato', href: '/contato' },
    
  ]
  
  function Nav() {
    return (
      <div>
        <Disclosure as="nav" className=" shadow-2xl bg-gradient-to-r from-gray-700 via-black to-gray-700">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <p className="underline md:underline bg-red-900 italic ml-3 font-medium text-serif text-white text-4xl truncate">
                        <span>CB</span>
                        </p> 
                    </div>
                       <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                        <div className="ml-10 flex items-baseline space-x-4">
                          {navigation.map((item) => (
                              <Link 
                              key={item.name}
                              href={item.href}
                            >
                              <a className="font-medium text-white hover:text-indgo-500"
                            >
                                 {item.name}
                               </a>
                               </Link>
                         ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between h-16">
                   
                    <div className="flex items-center">
                     <div className="flex-shrink-0">
                     <a href="/contato" 
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        Contato</a>
                     </div>
                    </div>
                  </div>

                  <div className="-mr-2 flex md:hidden">
                   
                    <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
  
              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item) => (
                          
                         <Link 
                         key={item.name}
                         href={item.href}
                       >
                         <a className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-50"
                       >
                            {item.name}
                          </a>
                          </Link>
                        ))}
                   </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                  <div className="flex items-center px-5">
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">Corretor Bruno</div>
           
                    </div>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        
        </div>
    )
  }
  export default Nav