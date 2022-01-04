

import { useRouter } from 'next/router'

function condominio({ user }) {
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  // Render post...
  return (
    <div>
      {user.map((post) => (
        <div>{post.id}</div>
      ))}
    </div>
)
}

// This function gets called at build time
export async function getStaticPaths() {
  
  return {
    // Only `/posts/1` and `/posts/2` are generated at build time
    paths: [
      { 
      params: { 
      id: '1',
      name: 'Jardins',
      description: 'Centro - Nova Iguaçu',
      imageSrc: '/assets/jardins/bgJA.png',
      imageAlt: 'imagem jardins',
      href: '/pages/user/1',} 
    }, {
      params: {   
      id: '2',
      name: 'Central Park',
      description: 'Moqueta - Nova Iguaçu',
      imageSrc: '/assets/centralpark/bgCP.png',
      imageAlt: 'imagem central park',
      href: '#',} 
    }, {
      params: {
      id: '3',
      name: 'Áurea Residencial',
      description: 'California - Nova Iguaçu',
      imageSrc: '/assets/aurea/bgAU.jpg',
      imageAlt: 'imagem aurea',
      href: '#',} 
      }
    ],
    // Enable statically generating additional pages
    // For example: `/posts/3`
    fallback: true,
  }
}

// This also gets called at build time
export async function getStaticProps({params}) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://localhost/user/${params}`)
  const user = await res.json()
  console.log(user);
  // Pass post data to the page via props
  return {
    props: { user },
    // Re-generate the post at most once per second
    // if a request comes in
   // revalidate: 1,
  
  }
  
}

export default condominio

/*
import { useRouter } from 'next/router'
import useSwr from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function User() {
  const router = useRouter()
  const { data, error } = useSwr(
    router.query.id ? `/api/user/${router.query.id}` : null,
    fetcher
  )

  if (error) return <div>Failed to load user</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
    <div>{data.id}</div>
    </>
)} */
