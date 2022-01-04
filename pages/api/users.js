
// // console.log(request.query.name)}
 const users = [
    { 
      id: 1,
      name: 'Jardins',
      description: 'Centro - Nova Iguaçu',
      imageSrc: '/assets/jardins/bgJA.png',
      imageAlt: 'imagem jardins',
      href: '/pages/user/1',
    },
    {
      id: 2,
      name: 'Central Park',
      description: 'Moqueta - Nova Iguaçu',
      imageSrc: '/assets/centralpark/bgCP.png',
      imageAlt: 'imagem central park',
      href: '#',
    },
    {
      id: 3,
      name: 'Áurea Residencial',
      description: 'California - Nova Iguaçu',
      imageSrc: '/assets/aurea/bgAU.jpg',
      imageAlt: 'imagem aurea',
      href: '#',
    },
  
  ]



export default function handler(req, res) {
  // Get data from your database
  res.status(200).json(users)
}

