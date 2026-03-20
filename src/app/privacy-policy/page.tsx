import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  robots: { index: false, follow: false },
  alternates: {
    canonical: 'https://fastobras.com.br/politica-de-privacidade',
  },
};

export default function PrivacyPolicyRedirect() {
  redirect('/politica-de-privacidade');
}

