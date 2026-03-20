import {
  Header,
  Hero,
  ClientsRange,
  Solution,
  Method,
  Portfolio,
  Steps,
  Contact,
  Footer,
} from '@/components/sections';
import Script from 'next/script';

const SITE_URL = 'https://fastobras.com.br';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Fast Obras',
  url: SITE_URL,
  logo: `${SITE_URL}/assets/images/logos/logo-fast-obras-black.svg`,
  description:
    'Construção comercial de alta performance em Steel Frame. Obras de grande porte entregues em tempo recorde — do conceito à execução com velocidade, precisão e método.',
  foundingDate: '2020',
  sameAs: [
    'https://instagram.com/fastobras',
    'https://facebook.com/fastobras',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: 'Portuguese',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Brazil',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: 'Fast Obras',
  url: SITE_URL,
  logo: `${SITE_URL}/assets/images/logos/logo-fast-obras-black.svg`,
  image: `${SITE_URL}/opengraph-image.jpg`,
  description:
    'Construtora especializada em construção comercial e industrial em Steel Frame. Obras de grande porte com velocidade, precisão e método.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'BR',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Brazil',
  },
  priceRange: '$$$',
  knowsAbout: [
    'Construção comercial',
    'Steel Frame',
    'Construção industrial',
    'Construção metálica',
    'Construção seca',
    'Obra comercial de grande porte',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Fast Obras',
  url: SITE_URL,
  description:
    'Construção comercial de alta performance em Steel Frame com velocidade real.',
  publisher: {
    '@type': 'Organization',
    name: 'Fast Obras',
  },
  inLanguage: 'pt-BR',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'O que é Steel Frame?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Steel Frame é um sistema construtivo industrializado que utiliza perfis de aço galvanizado como estrutura. Permite construções até 3x mais rápidas que o método convencional, com alta durabilidade, precisão dimensional e menor desperdício de materiais.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quais tipos de obra a Fast Obras executa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Fast Obras é especializada em construção comercial e industrial de grande porte: lojas, franquias, academias, escolas, galpões, centros de distribuição e espaços corporativos, utilizando o sistema Steel Frame.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual a vantagem do Steel Frame em relação à construção convencional?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Steel Frame oferece velocidade de execução até 3x mais rápida, obra limpa e seca com menor desperdício, alta precisão dimensional, durabilidade estrutural e sustentabilidade por usar materiais recicláveis.',
      },
    },
    {
      '@type': 'Question',
      name: 'A Fast Obras atende em todo o Brasil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim, a Fast Obras atua em todo o território nacional, com projetos já realizados em São Paulo, Rio de Janeiro, Belo Horizonte, Curitiba, Brasília e outras capitais.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como solicitar um orçamento?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Você pode solicitar um orçamento diretamente pelo formulário de contato no site fastobras.com.br ou pelo WhatsApp. A equipe retorna em até 24 horas com uma análise inicial do seu projeto.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Construção Comercial em Steel Frame',
  provider: {
    '@type': 'Organization',
    name: 'Fast Obras',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Brazil',
  },
  description:
    'Construção comercial e industrial de alta performance utilizando Steel Frame. Obras de grande porte com velocidade, qualidade e método próprio de gestão.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Serviços de Construção',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Construção Comercial em Steel Frame',
          description:
            'Lojas, franquias, academias e espaços comerciais construídos com Steel Frame.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Construção Industrial',
          description:
            'Galpões, centros de distribuição e estruturas industriais de grande porte.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Consultoria de Projeto',
          description:
            'Análise de viabilidade, planejamento construtivo e otimização de projetos.',
        },
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Script
        id="schema-organization"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="schema-local-business"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="schema-website"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="schema-faq"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="schema-service"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />
      <main id="main-content">
        <Hero />
        <ClientsRange />
        <Solution />
        <Method />
        <Portfolio />
        <Steps />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
