import useSwr from 'swr'
import Link from 'next/link'
 
  const fetcher = (url) => fetch(url).then((res) => res.json())
  
  export default function Folder() {
    const { data, error } = useSwr('/api/users', fetcher)

    if (error) return <div>Failed to load users</div>
    if (!data) return <div>Loading...</div>
  
    return (
        <div className="bg-gradient-to-r from-black via-gray-700 to-black">
             <div className="pb-50 shadow-2xl bg-gradient-to-r from-black via-gray-700 to-black rounded-lg flex items-center justify-center w-full h-24 sm:px-6 lg:px-8">
            <a className="text-white flex items-center justify-center">
            <h2 className="text-4xl font-serif text-center text-yellow-300">Comodidade e praticidade para sua família.</h2>
            </a>
            </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-5 sm:py-12 lg:py-0 lg:max-w-none">
            <div className="pt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
            {data.map((user) => (
                <div key={user.id} className="group relative">
                  <div className="border-2 border-gray-500 relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                 
                    <img
                      src={user.imageSrc}
                      alt={user.imageAlt}
                      className="w-full h-full object-center object-cover"
                    />
                    
                  </div>
                  <h3 className="pt-6 font-extrabold text-purple-500 text-sm text-2xl text-center">
                  <Link href="/user/[id]" as={`/user/${user.name}`}>
                       <a>
                         <span className="absolute inset-0" />
                        {`${user.name}`}
                       </a>
                    </Link>
                  </h3>
                  <p className="pb-6 text-2xl text-center text-base font-semibold text-white">{user.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

