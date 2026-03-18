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
    gallery: [],
    location: 'Belo Horizonte, MG',
  },
  {
    id: 'sesc-rio-de-janeiro',
    name: 'SESC Rio de Janeiro',
    year: '2024',
    logo: '/assets/images/logos/sesc.svg',
    mainImage: '/assets/images/backgrounds/teste.jpg',
    gallery: [],
    location: 'Rio de Janeiro, RJ',
  },
  {
    id: 'localiza-sao-paulo',
    name: 'Localiza São Paulo',
    year: '2024',
    logo: '/assets/images/logos/localiza.svg',
    mainImage: '/assets/images/backgrounds/teste.jpg',
    gallery: [],
    location: 'São Paulo, SP',
  },
  {
    id: 'maple-bear-curitiba',
    name: 'Maple Bear Curitiba',
    year: '2023',
    logo: '/assets/images/logos/maplebear.svg',
    mainImage: '/assets/images/projects/maple-bear-curitiba/main.jpg',
    gallery: [],
    location: 'Curitiba, PR',
  },
  {
    id: 'smart-fit-campinas',
    name: 'Smart Fit Campinas',
    year: '2023',
    logo: '/assets/images/logos/smartfit.svg',
    mainImage: '/assets/images/projects/smart-fit-campinas/main.jpg',
    gallery: [],
    location: 'Campinas, SP',
  },
  {
    id: 'sesc-brasilia',
    name: 'SESC Brasília',
    year: '2022',
    logo: '/assets/images/logos/sesc.svg',
    mainImage: '/assets/images/projects/sesc-brasilia/main.jpg',
    gallery: [],
    location: 'Brasília, DF',
  },
];
