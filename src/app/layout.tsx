import type { Metadata } from 'next';
import { Instrument_Sans, Lora, Chakra_Petch } from 'next/font/google';
import '@/styles/global.css';

const instrumentSans = Instrument_Sans({
  variable: '--font-instrument-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const chakraPetch = Chakra_Petch({
  variable: '--font-chakra-petch',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const SITE_URL = 'https://fastobras.com.br';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: 'Fast Obras | Construção Comercial em Steel Frame com Velocidade Real',
    template: '%s | Fast Obras',
  },

  description:
    'Construção comercial de alta performance em Steel Frame. Obras de grande porte entregues em tempo recorde — do conceito à execução com velocidade, precisão e método.',

  keywords: [
    'construção comercial',
    'steel frame',
    'obra comercial',
    'construção rápida',
    'construção industrial',
    'obra de grande porte',
    'construção steel frame',
    'construtora comercial',
    'fast construction',
    'construção metálica',
    'obra corporativa',
    'Fast Obras',
    'construção seca',
    'galpão steel frame',
    'loja steel frame',
    'construção acelerada',
  ],

  authors: [{ name: 'Fast Obras' }],
  creator: 'Fast Obras',
  publisher: 'Fast Obras',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: 'Fast Obras',
    title: 'Fast Obras | Construção Comercial em Steel Frame com Velocidade Real',
    description:
      'Obras comerciais de grande porte com Steel Frame. Velocidade de entrega que transforma prazos — do conceito à operação com método e precisão.',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Fast Obras — Construção Comercial em Steel Frame',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Fast Obras | Construção Comercial em Steel Frame',
    description:
      'Obras comerciais de grande porte entregues em tempo recorde. Steel Frame com método, velocidade e precisão.',
    images: ['/opengraph-image.png'],
  },

  alternates: {
    canonical: SITE_URL,
  },

  category: 'construction',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${instrumentSans.variable} ${lora.variable} ${chakraPetch.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
