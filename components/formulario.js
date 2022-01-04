import { useState } from "react"
import api from "./services/api"
import { useForm, ValidationError } from '@formspree/react';
import Alertmsg from './alertamsg'

export default function Formulario() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [text, setText] = useState('');

        const [state, handleSubmit] = useForm("xgedebgl");
        if (state.succeeded) {
           
            return ( 
               <>
               <Formulario />
               <Alertmsg />
               </>
                )

          //  (event) => {event.preventDefault(), router.push('/Contato')}
             
          
        }


        const registerUser = async event => {
            event.preventDefault();
        
            
            const res = ({
              name,
              email,
              tel,
              text
              })

            console.log(res)

            setName('');
            setEmail('');
            setTel('');

    }

  
        
  return (
    <>
   <div className="pl-20 lg:justify-end w-full flex w-5/6 bg-transparent">
    <div className="animate-pulse flex ">

   <div className="sm:text-center lg:text-left">
        <div className="min-h-full flex text-opacity-50 bg-black opacity-100 border border-yellow-300 w-4xl px-4 sm:px-6 lg:px-8 rounded-lg">
            <div className="max-w-md w-full space-y-8">
            <h1 className="text-center text-4xl tracking-tight font-sans sm:text-4xl md:text-4xl">
            <span className="block font-extrabold text-purple-500 xl:inline">Consultoria Imobiliaria</span>{' '} 
            <span className="block text-white xl:inline">Segura & Inteligente</span>
            </h1>

            <form onSubmit={handleSubmit}
                  className="mt-8 space-y-6" 
                  action="#" 
                  method="POST">
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
                    className="bg-transparent appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Seu nome"
                    value={name}
                    onChange={event => setName(event.target.value)}
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
                    className="bg-transparent mt-4 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                </div>
                <div>
                <label htmlFor="number" className="sr-only">
                    Telefone
                </label>
                <input
                    id="tel"
                    name="tel"
                    type="number"
                    autoComplete="current-password"
                    required
                    className="bg-transparent mt-4 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Telefone"
                    value={tel}
                    onChange={event => setTel(event.target.value)}
                />
                </div>
                <div>
                <label htmlFor="text" className="sr-only">
                    Testo
                </label>
                <textarea 
                id="about" 
                name="about" 
                rows="3" 
                className="shadow-sm focus:ring-indigo-500 bg-transparent px-3 focus:border-indigo-500 mt-1 block w-full text-white sm:text-sm border border-gray-300 rounded-md" 
                placeholder="Exemplo: nome do empreendimento"
                value={text}
                onChange={event => setText(event.target.value)}
                ></textarea>
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
        </div>
        </div>
    </>
  )
}


/*
import { useState } from "react"
import api from "./services/api"
import { useForm, ValidationError } from '@formspree/react';
import Alertmsg from './alertamsg'

export default function Formulario() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    

        const [state, handleSubmit] = useForm("xgedebgl");
        if (state.succeeded) {
           
            return ( 
               <>
               <Formulario />
               <Alertmsg />
               </>
                )

          //  (event) => {event.preventDefault(), router.push('/Contato')}
             
          
        }


        const registerUser = async event => {
            event.preventDefault();
        
            
            const res = ({
              name,
              email,
              tel,
              })

            console.log(res)

            setName('');
            setEmail('');
            setTel('');

    }

  
        
  return (
    <>
   
<main className="relative mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-5">
        <div className="sm:text-center lg:text-left">
        <div className="min-h-full flex justify-end text-opacity-50 bg-black opacity-75 w-96 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
            <h1 className="text-center text-4xl tracking-tight font-sans sm:text-4xl md:text-4xl">
            <span className="block font-extrabold text-purple-500 xl:inline">Consultoria Imobiliaria</span>{' '} 
            <span className="block text-white xl:inline">Segura & Inteligente</span>
            </h1>

            <form onSubmit={handleSubmit}
                  className="mt-8 space-y-6" 
                  action="#" 
                  method="POST">
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
                    className="bg-transparent appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Seu nome"
                    value={name}
                    onChange={event => setName(event.target.value)}
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
                    className="bg-transparent mt-4 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                </div>
                <div>
                <label htmlFor="number" className="sr-only">
                    Telefone
                </label>
                <input
                    id="tel"
                    name="tel"
                    type="number"
                    autoComplete="current-password"
                    required
                    className="bg-transparent mt-4 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Telefone"
                    value={tel}
                    onChange={event => setTel(event.target.value)}
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
    
    </>
  )
}

*/