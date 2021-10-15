// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export async function getStaticPaths() {
  return {
      paths: [{
          params: {
            
            id: '1',
            name: 'Jardins',
            description: 'Centro - Nova Iguaçu',
            imageSrc: '/assets/jardins/bgJA.png',
            imageAlt: 'imagem jardins',
            href: '/detalhes',
          }
      },{
          params: {
              id: '2',
              name: 'Park',
              description: 'Moqueta - Nova Iguaçu',
              imageSrc: '/assets/centralpark/bgCP.png',
              imageAlt: 'imagem central park',
              href: '#',
          }
      },{
        params: {
          id: '3',
          name: 'Áurea',
          description: 'California - Nova Iguaçu',
          imageSrc: '/assets/aurea/bgAU.jpg',
          imageAlt: 'imagem aurea',
          href: '#',
        }
    }],
      fallback: 'blocking'
  }
}

export async function getStaticProps(context) {
const id = context.params.id;

return {
  props: {
      id: id
  }
}

}

function Produtos(props) {
  return (
    <div>
        <h1>testa rota {props.id}</h1>
  </div>
)
}

export default Produtos;