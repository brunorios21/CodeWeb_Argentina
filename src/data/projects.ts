export interface PortfolioProject {
  id: string
  title: string
  category: string
  description: string
  demoUrl: string
  images: readonly string[]
}

export const projectsData: readonly PortfolioProject[] = [
  {
    id: 'arkhe-studio',
    title: 'ARKHE Studio',
    category: 'Estudio de Arquitectura y Diseño',
    description: 'Portfolio visual inmersivo que pone en primer plano la obra, el proceso y la identidad del estudio.',
    demoUrl: 'https://arkhestudio-01.netlify.app/#sobre-nosotros',
    images: [
      '/projects/capturas_del_proyecto01/imagen1.jpg',
      '/projects/capturas_del_proyecto01/imagen2.jpg',
      '/projects/capturas_del_proyecto01/imagen3.jpg',
      '/projects/capturas_del_proyecto01/imagen4.jpg',
      '/projects/capturas_del_proyecto01/imagen5.jpg',
      '/projects/capturas_del_proyecto01/imagen6.jpg',
      '/projects/capturas_del_proyecto01/imagen7.jpg',
    ],
  },
  {
    id: 'autoimport',
    title: 'AutoImport',
    category: 'Plataforma de Importación y Venta Vehicular',
    description: 'Experiencia de producto clara para explorar vehículos, servicios de importación y oportunidades comerciales.',
    demoUrl: 'https://autoimport02.netlify.app/',
    images: [
      '/projects/capturas_del_proyecto02/imagen1.png',
      '/projects/capturas_del_proyecto02/imagen2.png',
      '/projects/capturas_del_proyecto02/imagen3.png',
    ],
  },
  {
    id: 'meridian-legal-studio',
    title: 'Meridian Legal Studio',
    category: 'Asesoría Jurídica y Estrategia Corporativa',
    description: 'Presencia digital sobria y estratégica para una firma legal enfocada en asesoramiento corporativo.',
    demoUrl: 'https://meridianlegalstudiio.netlify.app/',
    images: [
      '/projects/capturas_del_proyecto03/imagen1.png',
      '/projects/capturas_del_proyecto03/imagen2.png',
      '/projects/capturas_del_proyecto03/imagen3.png',
    ],
  },
  {
    id: 'carniceria-luca',
    title: 'Carnicería Luca',
    category: 'E-commerce · Gastronomía',
    description: 'Una experiencia digital cercana y directa para un negocio local que quería vender mejor.',
    demoUrl: 'https://carnicerialutab.netlify.app/',
    images: ['/projects/lucas-dashboard.jpg'],
  },
  {
    id: 'pc-tech-store',
    title: 'PC Tech Store',
    category: 'Catálogo · Tecnología',
    description: 'Catálogo de productos con una navegación rápida y enfocada en la decisión de compra.',
    demoUrl: 'https://brunorios21.github.io/Entrega-Final-Talento-Tech/index.html',
    images: ['/projects/pctech-catalog.jpg'],
  },
  {
    id: 'codeweb-argentina',
    title: 'CodeWeb Argentina',
    category: 'Marca · Portfolio',
    description: 'La casa digital de nuestro estudio: identidad, conversión y desarrollo en una sola pantalla.',
    demoUrl: 'https://codewebargentina.netlify.app/',
    images: ['/projects/blackframe-hero.jpg'],
  },
]
