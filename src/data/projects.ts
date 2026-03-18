export interface Project {
  id: string;
  name: string;
  year: string;
  logo: string;
  mainImage: string;
  gallery: string[];
  location: string;
}

export const projects: Project[] = [
  {
    id: 'smart-fit-belo-horizonte',
    name: 'Smart Fit Belo Horizonte',
    year: '2025',
    logo: '/assets/images/logos/smartfit.svg',
    mainImage: '/assets/images/backgrounds/teste.jpg',
    gallery: ['/assets/images/backgrounds/teste.jpg', '/assets/images/backgrounds/teste-2.jpg', '/assets/images/backgrounds/teste-3.jpg'],
    location: 'Belo Horizonte, MG',
  },
  {
    id: 'sesc-rio-de-janeiro',
    name: 'SESC Rio de Janeiro',
    year: '2024',
    logo: '/assets/images/logos/sesc.svg',
    mainImage: '/assets/images/backgrounds/teste-2.jpg',
    gallery: ['/assets/images/backgrounds/teste-2.jpg', '/assets/images/backgrounds/teste.jpg', '/assets/images/backgrounds/teste-3.jpg'],
    location: 'Rio de Janeiro, RJ',
  },
  {
    id: 'localiza-sao-paulo',
    name: 'Localiza São Paulo',
    year: '2024',
    logo: '/assets/images/logos/localiza.svg',
    mainImage: '/assets/images/backgrounds/teste-3.jpg',
    gallery: ['/assets/images/backgrounds/teste-3.jpg', '/assets/images/backgrounds/teste.jpg', '/assets/images/backgrounds/teste-2.jpg'],
    location: 'São Paulo, SP',
  },
  {
    id: 'maple-bear-curitiba',
    name: 'Maple Bear Curitiba',
    year: '2023',
    logo: '/assets/images/logos/maplebear.svg',
    mainImage: '/assets/images/backgrounds/teste-2.jpg',
    gallery: ['/assets/images/backgrounds/teste-2.jpg', '/assets/images/backgrounds/teste-3.jpg', '/assets/images/backgrounds/teste.jpg'],
    location: 'Curitiba, PR',
  },
  {
    id: 'smart-fit-campinas',
    name: 'Smart Fit Campinas',
    year: '2023',
    logo: '/assets/images/logos/smartfit.svg',
    mainImage: '/assets/images/projects/smart-fit-campinas/main.jpg',
    gallery: ['/assets/images/backgrounds/teste.jpg', '/assets/images/backgrounds/teste-2.jpg', '/assets/images/backgrounds/teste-3.jpg'],
    location: 'Campinas, SP',
  },
  {
    id: 'sesc-brasilia',
    name: 'SESC Brasília',
    year: '2022',
    logo: '/assets/images/logos/sesc.svg',
    mainImage: '/assets/images/projects/sesc-brasilia/main.jpg',
    gallery: ['/assets/images/backgrounds/teste-3.jpg', '/assets/images/backgrounds/teste.jpg', '/assets/images/backgrounds/teste-2.jpg'],
    location: 'Brasília, DF',
  },
];
