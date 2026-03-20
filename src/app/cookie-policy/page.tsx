import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Política de Cookies',
  robots: { index: false, follow: false },
  alternates: {
    canonical: 'https://fastobras.com.br/politica-de-cookies',
  },
};

export default function CookiePolicyRedirect() {
  redirect('/politica-de-cookies');
}

